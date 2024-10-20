// Using the propes object.

const ListItems = (props) => {
  return (
    <>
      <li className="list-group-item">
        {props.item}
      </li>
    </>
  );
};

export default ListItems;
