import Board from "react-trello";
import { useEffect, useState } from "react";

const Todo = () => {
  const [list, setList] = useState({
    lanes: [
      {
        id: "lane1",
        title: "Planned Tasks",
        cards: [],
      },
      {
        id: "lane3",
        title: "Completed",
        cards: [],
      },
      {
        id: "lane2",
        title: "In Progress",
        cards: [],
      },
    ],
  });
  useEffect(() => {
    if (localStorage.getItem("Kanban")) {
      setList(JSON.parse(localStorage.getItem("Kanban")));
    }
  }, []);

  const updateStorage = (newData) => {
    setList(newData);
    localStorage.setItem("Kanban", JSON.stringify(newData));
  };

  return (
    <Board
      data={list}
      editable={true}
      draggable={true}
      laneDraggable={true}
      cardDraggable={true}
      collapsibleLanes={true}
      canAddLanes={true}
      editLaneTitle={true}
      onDataChange={updateStorage}
      style={{ backgroundColor: "white", fontFamily: "Poppins" }}
    />
  );
};

export default Todo;
