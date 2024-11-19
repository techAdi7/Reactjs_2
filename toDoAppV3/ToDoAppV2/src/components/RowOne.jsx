import { useState } from "react"; // <-- Add this line

function RowOne({ handleChange }) {
  // defining the current states of input name field as empty and current date field as empty in terms of state.
  const [toDo, setToDo] = useState("");
  const [dueDate, setDueDate] = useState("");

  // defining the name change and date change functions
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setToDo(e.target.value);
  };

  const handleDateChange = (e) => {
    console.log(e.target.value);
    setDueDate(e.target.value);
  };

  const handleButtonPress = () => {
    handleChange(toDo, dueDate);
    setToDo("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row asRow">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo here"
            onChange={handleNameChange}
            value={toDo}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success asbutton"
            onClick={ handleButtonPress} 
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default RowOne;
