import React from "react";
import CheckEmpty from "./components/CheckEmp";
import FoodItems from "./components/FoodItems";

function App() {
  let healthyItems = [
    "Dal",
    "Fruits",
    "Milk",
    "Fish",
    "Roti",
    "Ghee",
    "Salad",
    "Vegetables",
  ];

  // let healthyItems = [];

  // conditional rendering

  // M-1 :- Using if statement (Conditional Statement).

  // if (healthyItems.length === 0) {
  //   return <p>Hey listen, I am Hungry.</p>;
  // }

  // Check Empty variable

  // let checkEmpty = healthyItems.length === 0 ? <h3>I am hungry</h3> : null;

  return (
    <>
      <h1>Healthy Food items:-</h1>

      {/* M-2 :- Using the " TERNARY OPERATOR ". */}
      {/* {checkEmpty} */}

      {/* M-3 :- Using the " LOGICAL OPERATOR " .*/}
      {/* {checkEmpty && <h3>hey what are you doin man , I am still Hungry</h3>} */}

      <CheckEmpty sameItem={healthyItems}></CheckEmpty>

      <FoodItems sameItem={healthyItems}></FoodItems>
    </>
  );
}

export default App;

// {/* <ul className="list-group">
//         {/* Use of .map() method here to render or use as an alternate for the loop in .jsx file.*/}

//         {healthyItems.map((i) => (
//           <li key={i} className="list-group-item">
//             {i}
//           </li>
//         ))}
//       </ul> */}
