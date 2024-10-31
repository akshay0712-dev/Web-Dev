import "./app.css";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice.js'

export function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div className="m-7">
        <button className="text-xl" 
        onClick={() => dispatch(decrement())}
        >-</button>
        <span className="m-7 ">Currentlu count is {count}</span>
        <button className="text-xl" 
        onClick={() => dispatch(increment())}
        >+</button>
      </div>
    </>
  );
}
