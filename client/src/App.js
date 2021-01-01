import "./App.css";
import { useEffect, useState } from "react";
function App() {
  useEffect(() => {
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
  }, []);
  const [quote, setQuote] = useState("");
  const [weekday, setWeekday] = useState("");

  let image = window.location.origin + `/${weekday}.jpg`;
  let now = new Date();
  return (
    <div id="bg" style={{ background: "url(" + image + ")" }}>
      <div id="layer">
        <h2>
          {now.getHours()} : {now.getMinutes()}
        </h2>
        <h2>{quote}</h2>
      </div>
    </div>
  );
}

export default App;
