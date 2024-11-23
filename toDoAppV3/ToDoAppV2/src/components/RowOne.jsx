// import { useState } from "react"; // <-- Add this line

// function RowOne({ handleChange }) {
//   // defining the current states of input name field as empty and current date field as empty in terms of state.
//   const [toDo, setToDo] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   // defining the name change and date change functions
//   const handleNameChange = (e) => {
//     console.log(e.target.value);
//     setToDo(e.target.value);
//   };

//   const handleDateChange = (e) => {
//     console.log(e.target.value);
//     setDueDate(e.target.value);
//   };

//   const handleButtonPress = (event) => {
//     console.log("submitted");

//     //  [NOTE :- The event. preventDefault() line prevents the form from actually submitting, giving you a chance to validate or process the input before submitting it to the server or updating the state of your React component.]
//     event.preventDefault();

//     handleChange(toDo, dueDate);
//     setToDo("");
//     setDueDate("");
//   };

//   return (
//     <div className="container text-center">
//       <div className="row asRow" >
//         <div className="col-4">
//           <input
//             type="text"
//             placeholder="Enter Todo here"
//             onChange={handleNameChange}
//             value={toDo}
//           />
//         </div>
//         <div className="col-4">
//           <input type="date" onChange={handleDateChange} value={dueDate} />
//         </div>
//         <div className="col-2">
//           <button
//             type="button"
//             className="btn btn-success asbutton" onClick = {handleChange}
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RowOne;

// Implementing React form , hook useRef().

// I am going to use useRef() hook for the state management in place of useState() hook
import { useState, useRef } from "react"; // <-- Add this line

function RowOne({ handleChange }) {
  // defining the current states of input name field as empty and current date field as empty in terms of state.
  // const [toDo, setToDo] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const toDoNameByRef = useRef();
  const dueDateByRef = useRef();

  // defining the name change and date change functions
  // const handleNameChange = (e) => {
  //   // console.log(e.target.value);
  //   setToDo(e.target.value);
  //   toDoUpdates.current += 1;
  // };

  // const handleDateChange = (e) => {
  //   // console.log(e.target.value);
  //   setDueDate(e.target.value);
  //   console.log(`No of Updates are :- ${toDoUpdates.current}`);

  // };

  const handleButtonPress = (event) => {
    // console.log("submitted");

    //  [NOTE :- The event. preventDefault() line prevents the form from actually submitting, giving you a chance to validate or process the input before submitting it to the server or updating the state of your React component.]
    event.preventDefault();

    // to get th value of the both inputs we use .current.value syntax to get it .
    const toDoNameRef = toDoNameByRef.current.value;
    const dueDateRef = dueDateByRef.current.value;

    toDoNameByRef.current.value = "";
    dueDateByRef.current.value = "";

    handleChange(toDoNameRef, dueDateRef);

    // setToDo("");
    // setDueDate("");
  };

  return (
    <div className="container text-center">
      <form className="row asRow" onSubmit={handleButtonPress}>
        <div className="col-4">
          <input
            type="text"
            ref={toDoNameByRef}
            placeholder="Enter Todo here"
          />
        </div>
        <div className="col-4">
          <input ref={dueDateByRef} type="date" />
        </div>
        <div className="col-2">
          <button // [NOTE :- BY DEFAULT ITS TYPE IS "SUBMIT"]
            type="submit"
            className="btn btn-success asbutton"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default RowOne;
