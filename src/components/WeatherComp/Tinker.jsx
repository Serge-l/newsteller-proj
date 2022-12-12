import React, { useState } from "react";

function Tinker(props) {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toDateString();

  const [ticks, setTicks] = useState(time);
  const [dates, setDates] = useState(date);
  const [greet, setGreet] = useState("Good Morning!");
  const [dayStatus, setdayStatus] = useState("Make some cofee:)");

  function tickTimer() {
    setTicks(new Date().toLocaleTimeString());
  }

  function foo() {
    if (time.includes("PM")) {
      setGreet("Good Afternoon");
      setdayStatus("Getting tired?");
    } else if (time.includes("AM")) {
      setGreet("Good Morning!");
      setdayStatus("Wake up!!");
    }
  }

  function dateChanger() {
    setDates(new Date().toLocaleDateString);
  }

  setInterval(tickTimer, dateChanger, 1000);
  setInterval(foo, 1000);

  return (
    <div>
      <div className="date-block">
        <h1 className="greet-text">{greet}</h1>
        <h2>Today is</h2>
        <span className="month">{dates}</span>
      </div>
      <div className="time-block">
        <h3>Current time:</h3>
        <span className="ticks">{ticks}</span>
        <h4>{dayStatus}</h4>
      </div>
    </div>
  );
}

export default Tinker;

////////////////////////////////////////////////////////////////////

// const date = `${
//   current.getMonth() + 1
// }/${current.getDate()}/${current.getFullYear()} ${current.getHours()}:
// ${current.getMinutes()}:${current.getSeconds()}`;
