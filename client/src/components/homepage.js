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
    setHour(date.getHours());
    setMin(date.getMinutes());
    //update time Current once per minute
    let curTime = setInterval(() => {
      let date = new Date();
      setHour(date.getHours());
      setMin(date.getMinutes());
    }, 60000);

    return () => clearInterval(curTime);
  }, []);
  return (
    <div>
      <h2 id="clock">
        {hour} : {min}
      </h2>
      <h3>{quote}</h3>
    </div>
    )
}

export default Homepage