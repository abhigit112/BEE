import dayjs from "dayjs";
import DayBlock from "./DayBlock";
import Navbar from "./Navbar";

const Messcard = ()=>{
    let months = ['January','Feb','Mar','Apr','May','June','July','August','September','October','November','Dec'];

    const today = dayjs();
    console.log(today);
    const currentMonth = today.month();
    console.log(currentMonth);
    const currentYear = today.year();
  
    const firstDayOfMonth = dayjs(`${currentYear}-${currentMonth + 1}-01`);
    const lastDayOfMonth = firstDayOfMonth.endOf('month');
  
    const daysInMonth = Array.from({ length: lastDayOfMonth.date() }, (_, i) => i + 1);
    const firstDayOfWeek = firstDayOfMonth.day();
  
    const weeks = [];
    let days = [];
  
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="p-4"></div>);
    }
  
    daysInMonth.forEach((day) => {
      days.push(
        <DayBlock key={day} day={day} />
      );
  
      if ((firstDayOfWeek + day) % 7 === 0) {
        weeks.push(<div key={`week-${weeks.length}`} className="grid grid-cols-7 gap-1">{days}</div>);
        days = [];
      }
    });
  
    if (days.length > 0) {
      while (days.length < 7) {
        days.push(<div key={`empty-end-${days.length}`} className="p-4"></div>);
      }
      weeks.push(<div key={`week-${weeks.length}`} className="grid grid-cols-7 gap-1">{days}</div>);
    }
  
    return (
        <>
        <Navbar/>

      <div className="w-full mx-auto p-4 bg-white shadow-md rounded-lg">
        <div
        className="flex flex-row items-center justify-around ml-28"
        >
        <div className="flex justify-center items-center">
        <img
        className="size-28"
        src={"https://finecards.netlify.app/static/media/dinner.2896337bf4cf8e08ae7e.png"}
          alt="food"
        />
        <p
        className="flex text-black text-3xl"
        >MessCard</p>
        </div>
      <h1 className="flex justify-center text-red-500 text-3xl my-4"
      >{months[currentMonth]}</h1>
        </div>
        <div className="grid grid-cols-7 gap-1 border-b border-gray-300 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="p-2 text-center font-bold text-gray-600">
              {day}
            </div>
          ))}
        </div>
        {weeks}
        <div><h1>Hello </h1></div>

      </div>
      </>
    );
  };

export default Messcard;