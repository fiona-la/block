import "./App.css";
import { useEffect, useState } from "react";
import Homepage from './components/homepage';
function App() {
  useEffect(() => {
    fetch("http://localhost:3001/weekday")
      .then((res) => res.text())
      .then((weekday) => {
        setWeekday(weekday);
      })
      .catch((err) => console.log(err));
  }, []);
  const [tab, setTab] = useState(0);

  const [weekday, setWeekday] = useState("");

  let image = window.location.origin + `/${weekday}.jpg`;
  const showTab = () =>{
    switch(tab){
      case 0:
        return <Homepage />;
      case 1:
        return <div>Not Implemented </div>;
    }
  }
  let openTabOne = () =>{
    setTab(1)
  }
  return (
    <div id="bg" style={{ background: "url(" + image + ")" }}>
      <div id="layer">
      <button onClick={openTabOne}>Swap Tab</button>
      {showTab()}
      </div>
    </div>
  );
}

export default App;
