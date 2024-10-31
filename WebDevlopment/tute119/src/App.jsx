import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, delay * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2)

    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);
    // if (data.username !== "Akshay") {
    //   setError("myform", {message: ` ${data.username} you are blocked`})
    // }
  };

  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" bg-slate-500 text-white p-5 w-[100vw]">
        Example Form
        {isSubmitting && <div> Submitting ........ </div>}
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col"
        >
          <input
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "max length is 8" },
            })}
            placeholder="Username"
            type="text"
            className="gap-4 min-w-fit rounded-lg w-[40%] bg-[#e8ede8ce] m-3 p-3"
          />
          {errors.username && (
            <div className="text-[red]">Error: {errors.username.message} </div>
          )}
          <input
            {...register("password", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 6, message: "Min length is 6" },
            })}
            placeholder="Enter Your password"
            type="password"
            className="gap-4 min-w-fit rounded-lg w-[40%] bg-[#e8ede8ce] m-3 p-3"
          />
          {errors.password && (
            <div className="text-[red]">Error: {errors.password.message} </div>
          )}
          <input
            disabled={isSubmitting}
            placeholder="Submit"
            type="submit"
            name="submit"
            id=""
            className="gap-4 min-w-fit rounded-lg w-[20%] bg-indigo-500 shadow-lg shadow-indigo-500/80 hover:shadow-indigo-500/40 border-t-[3px]  border-r-[3px] active:border-t-[0px] active:border-r-[0px] border-indigo-900 font-[750] m-3 p-2 cursor-pointer"
          />
          {errors.myform && (
            <div className="text-red-600">{errors.myform.message}</div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
