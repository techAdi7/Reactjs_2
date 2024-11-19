import CheckEmpty from "./components/CheckEmp";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import React, { useState } from "react";

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
  




  const [itemValue, setItemValue] = useState();
  
  const handleChange = (event) => {
    console.log(event.target.value);
    setItemValue(event.target.value);
  };

  //[ NOTE :- THE BELOW IS NOT POSSIBLE AS IT IS POSSIBLE IN JS ONLY HERE IN REACT THE APP WILL GET REPAINT AND REASSIGN THE TEXT TO SHOW VALUE AS PREVIOUS ONE AND GOT UNCHANGES SO WE ARE GOING TO USE STATES ABOVE TO COPE UP WITH THE BELOW PROBLEM .]
  
  // let textToShow = "Add food item here"
  //   const handleChange = (event)=>{
  //     console.log(event.target.value);

  //     textToShow = event.target.value;
  //   }

  // const handleBuyButtonClicked = (event , healthyItems) => {
  //   console.log(event , "is being bought.");

  //   console.log(`${healthyItems} is being bought.`);

  // };

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
      <Container>
        <h1>Healthy Food items:-</h1>

        {/* M-2 :- Using the " TERNARY OPERATOR ". */}
        {/* {checkEmpty} */}

        {/* M-3 :- Using the " LOGICAL OPERATOR " .*/}
        {/* {checkEmpty && <h3>hey what are you doin man , I am still Hungry</h3>} */}

        <FoodInput handleOnChange={handleChange}></FoodInput>
        <p>{itemValue}</p>
        <CheckEmpty sameItem={healthyItems}></CheckEmpty>

        <FoodItems sameItem={healthyItems}></FoodItems>
      </Container>
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
