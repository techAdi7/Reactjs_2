const ToDoItem = ({ todoitem, tododate , onDeleteClick}) => {
  return (
    <>
      <div className="container text-center">
        <div className="row asRow">
          <div className="col-4">{todoitem}</div>
          <div className="col-4">{tododate}</div>
          <div className="col-2">

            
            <button type="button" className="btn btn-danger asbutton" onClick={()=>{onDeleteClick(todoitem)}}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoItem;
