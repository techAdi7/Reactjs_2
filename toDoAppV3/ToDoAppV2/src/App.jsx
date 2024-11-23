// // to do app version-3 using the hook useState().

// import Heading from "./components/Heading";
// import RowOne from "./components/RowOne";
// import Items from "./components/Items";
// import WelcomeMessage from "./components/WelcomeMessage";
// import "./App.css";
// import { useState } from "react";

// function App() {
//   // creating the to do objects List/Array

//   let toDoObject = [];

//   const [toDo, setToDo] = useState(toDoObject);

//   const onItemChange = (itemName, dueDate) => {
//     // testing the stiching
//     console.log(
//       "new item added",
//       "item : ",
//       itemName,
//       " ; Due date : ",
//       dueDate
//     );
//     const newToDoItemsList = [...toDo, { toDo: itemName, dueDate: dueDate }];
//     setToDo(newToDoItemsList);
//   };

//   const handleDeleteClick = (toDoItemName) => {
//     console.log("item deleted :- ", toDoItemName);

//     const deletedToDoItemsList = toDo.filter((i) => i.toDo !== toDoItemName);
//     setToDo(deletedToDoItemsList);
//   };

//   return (
//     <>
//       <center>
//         <div className="toDo-container">
//           <Heading />
//           <RowOne handleChange={onItemChange} />
//           {toDo.length === 0 && <WelcomeMessage></WelcomeMessage>}
//           <Items todoName={toDo} onDeleteClick={handleDeleteClick}></Items>
//         </div>
//       </center>
//     </>
//   );
// }

// export default App;

// to do app version-3 using the hook useRef() and spread operators otimised use case.

import Heading from "./components/Heading";
import RowOne from "./components/RowOne";
import Items from "./components/Items";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  // creating the to do objects List/Array

  let toDoObject = [];

  const [toDo, setToDo] = useState(toDoObject);

  const noOfUpdates = useRef(0);

  const onItemChange = (itemName, dueDate) => {
    // testing the stiching
    // console.log(
    //   "new item added",
    //   "item : ",
    //   itemName,
    //   " ; Due date : ",
    //   dueDate
    // );

    // we don't have to use the todo list to update we will just have to pass it int the method declared in the setToDo().

    // const newToDoItemsList = [...toDo, { toDo: itemName, dueDate: dueDate }];
    // setToDo(newToDoItemsList);

    // we can pass the current value of the todoList in a method declared in the setToDo().

    // M-1:- optimised way
    // setToDo((currentValue) => {
    //   const updatedToDoItems = [
    //     ...currentValue,
    //     { toDo: itemName, dueDate: dueDate },
    //   ];
    //   return updatedToDoItems;
    // });

    // M-2 :- more optimized way
    // here since its only in single line then no neet to return and brackets as well.
    setToDo((currentValue) => [
      ...currentValue,
      { toDo: itemName, dueDate: dueDate },
    ]);
  };

  const handleDeleteClick = (toDoItemName) => {
    // testing the stiching
    // console.log("item deleted :- ", toDoItemName);

    const deletedToDoItemsList = toDo.filter((i) => i.toDo !== toDoItemName);
    setToDo(deletedToDoItemsList);
  };

  return (
    <>
      <center>
        <div className="toDo-container">
          <Heading />
          <RowOne handleChange={onItemChange} />
          {toDo.length === 0 && <WelcomeMessage></WelcomeMessage>}
          <Items todoName={toDo} onDeleteClick={handleDeleteClick}></Items>
        </div>
      </center>
    </>
  );
}

export default App;


// [NOTE :-  Spread operator is used to spread the entire array elements in the another array  andmake it a new array .]