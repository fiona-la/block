import { useEffect, useState } from "react";

const Homepage = () => {
  //initialize variables
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    //Get quote of the day
    fetch("http://localhost:3001/qotd")
      .then((res) => res.text())
      .then((quote) => {
        setQuote(quote);
      });
    //start with current time
    let date = new Date();
    var h = date.getHours();
    var m = date.getMinutes().toString();
    h = h % 12 || 12;
    h = h.toString();
    setHour(h.padStart(2, "0"));
    setMin(m.padStart(2, "0"));
    //update time Current once per minute

    const curTime = setInterval(() => {
      let d = new Date();
      var h = d.getHours();
      var m = d.getMinutes().toString();
      h = h % 12 || 12;
      h = h.toString();
      setHour(h.padStart(2, "0"));
      setMin(m.padStart(2, "0"));
    }, 60000);

    return () => clearInterval(curTime);
  }, []);
  return (
    <div id="homepage">
      <h2 id="clock">
        {hour}:{min}
      </h2>
      <h2 id="quotes">{quote}</h2>
    </div>
  );
};

export default Homepage;
