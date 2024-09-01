import { useState } from "react";
import UserContext from "../utils/UserContext";
import { useContext } from "react";


const DayBlock = ({ day }) => {
    const [ticks, setTicks] = useState([false, false, false, false]);
    
    const {rejectAMeal} = useContext(UserContext);
    // console.log('Hello');
    // console.log(rejectAMeal);
  

    const toggleTick = (index) => {
      setTicks((prevTicks) => {
        const newTicks = [...prevTicks];
        // newTicks[index] = !newTicks[index];
        newTicks[index] = true;
        return newTicks;
      });
    };
  
    return (
      <div className="flex flex-col items-center p-2 border border-gray-300 bg-gray-100 rounded">
        <div className="font-bold mb-2">{day}</div>
        <div className="grid grid-cols-4 gap-1">
            <div
            className="font-bold ml-3 text-red-500"
            >B</div>
            <div
            className="font-bold ml-3 text-red-500"
            >L</div>
            <div
            className="font-bold ml-3 text-red-500"
            >S</div>
            <div
            className="font-bold ml-3 text-red-500"
            >D</div>
        
          {ticks.map((ticked, index) => (
            <div
              key={index}
              onClick={() => toggleTick(index)}
              className={`w-8 h-8 flex items-center justify-center border border-gray-400 rounded cursor-pointer ${
                ticked ? 'bg-black' : 'bg-white'
              }`}
            >
            {/* console.log(index) */}
            {/* {rejectAMeal=true} */}
            {ticked && <span className="text-green">✔</span>}
            </div>
          ))}
        </div>
        {/* <div><h1>Hello </h1></div> */}
      </div>
    );
  };
  
  export default DayBlock;