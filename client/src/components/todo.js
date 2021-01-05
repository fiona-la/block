import Board from "react-trello";
import { useEffect, useState } from "react";

const Todo = () => {
  const [list, setList] = useState({
    lanes: [
      {
        id: "lane1",
        title: "Planned Tasks",
        cards: [
          {
            id: "Card1",
            title: "Write Blog",
            description: "Can AI make memes",
            label: "30 mins",
          },
          {
            id: "Card2",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
        ],
      },
      {
        id: "lane2",
        title: "Completed",
        cards: [],
      },
    ],
  });
  return (
    <Board
      data={list}
      editable={true}
      draggable={true}
      laneDraggable={true}
      cardDraggable={true}
      collapsibleLanes={true}
      canAddLanes={true}
      hideCardDeleteIcon={true}
      editLaneTitle={true}
    />
  );
};

export default Todo;
