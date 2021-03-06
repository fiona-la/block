import "./App.css";
import { useEffect, useState } from "react";
import Homepage from "./components/homepage";
import Todo from "./components/todo";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

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

  let image = window.location.origin + `/block/${weekday}.jpg`;
  const showTab = () => {
    switch (tab) {
      case 0:
        return <Homepage />;
      case 1:
        return <Todo />;
    }
  };
  let openTabOne = () => {
    setTab(1);
  };
  let openHome = () => {
    setTab(0);
  };
  return (
    <div id="app">
      <div id="nav">
        <Button variant="outline-white" onClick={openHome} id="but-home">
          Home
        </Button>
        <br></br>
        <Button variant="outline-whiet" onClick={openTabOne} id="but-todo">
          To do List
        </Button>
      </div>
      <div id="bg" style={{ background: "url(" + image + ") " }}>
        {showTab()}
      </div>
    </div>
  );
}

export default App;
