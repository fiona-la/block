import Board from "react-trello";
import { useEffect, useState } from "react";

const Todo = () => {
  const [list, setList] = useState({
    lanes: [],
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
    />
  );
};

export default Todo;
