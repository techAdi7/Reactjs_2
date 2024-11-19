import Heading from "./components/Heading";
import RowOne from "./components/RowOne";
import Items from "./components/Items";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  // creating the to do objects List/Array

  let toDoObject = [
    { toDo: "Buy Milk", dueDate: "18/10/2024" },
    { toDo: "Go to College", dueDate: "19/10/2024" },
    {
      toDo: "Make DSA Notes",
      dueDate: "21/10/2024",
    },
  ];

  const [toDo, setToDo] = useState(toDoObject);

  const onItemChange = (itemName, dueDate) => {
    // testing the stiching
    console.log(
      "new item added",
      "item : ",
      itemName,
      " ; Due date : ",
      dueDate
    );
    const newToDoItemsList = [...toDo, { toDo: itemName, dueDate: dueDate }];
    setToDo(newToDoItemsList);
  };

  const handleDeleteClick = (toDoItemName) => {
    console.log("item deleted :- ", toDoItemName);

    const deletedToDoItemsList = toDo.filter((i)=>i.toDo !== toDoItemName )
    setToDo(deletedToDoItemsList)
  };



  return (
    <>
      <center>
        <div className="toDo-container">
          <Heading />
          <RowOne handleChange={onItemChange} />
          { toDo.length === 0  && <WelcomeMessage></WelcomeMessage>}
          <Items todoName={toDo} onDeleteClick={handleDeleteClick}></Items>
        </div>
      </center>
    </>
  );
}

export default App;
