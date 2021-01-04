import "./App.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    var date = new Date();
    setHour(date.getHours());
    setMin(date.getMinutes());
    fetch("http://localhost:3001/qotd")
      .then((res) => res.text())
      .then((quote) => {
        setQuote(quote);
      });
    fetch("http://localhost:3001/weekday")
      .then((res) => res.text())
      .then((weekday) => {
        setWeekday(weekday);
      })
      .catch((err) => console.log(err));

    let curTime = setInterval(() => {
      var date = new Date();
      setHour(date.getHours());
      setMin(date.getMinutes());
    }, 60000);

    return () => clearInterval(curTime);
  }, []);

  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [quote, setQuote] = useState("");
  const [weekday, setWeekday] = useState("");

  let image = window.location.origin + `/${weekday}.jpg`;
  return (
    <div id="bg" style={{ background: "url(" + image + ")" }}>
      <div id="layer">
        <h2 id="clock">
          {hour} : {min}
        </h2>
        <h2>{quote}</h2>
      </div>
    </div>
  );
}

export default App;
