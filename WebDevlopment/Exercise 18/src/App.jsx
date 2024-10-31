import { useRef, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Card from "./components/card.jsx";

function App() {
  const [cards, setcards] = useState([]);
  const fetchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setcards(data);
    console.log(data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="bg-[#f0f0f0] min-h-[100vh]">
        <Navbar />
        <div className="cardContainer flex justify-center flex-wrap gap-6 p-6">
          {cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
