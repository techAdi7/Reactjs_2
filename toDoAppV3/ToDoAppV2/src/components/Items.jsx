import ToDoItem from "./ToDoItem";

const Items = ({todoName , onDeleteClick}) => {
  return (
    <>
      <div className="align">
        {todoName.map((item) => (
          <ToDoItem todoitem = {item.toDo} tododate = {item.dueDate}  key={item.toDo} onDeleteClick={onDeleteClick}></ToDoItem>
        ))}
      </div>
    </>
  );
};

export default Items;
