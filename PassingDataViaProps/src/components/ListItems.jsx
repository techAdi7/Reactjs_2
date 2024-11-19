// Using the propes object.
import styl from "./FoodItems.module.css";
import style from "./ListItems.module.css";

const ListItems = ({item , handle}) => {
  

  return (
    <>
      <li className={`${styl.color} list-group-item`}>
        {item}
        <button
          type="button"
          className={`${style.myButton} btn btn-info`}
          onClick={handle}
        >
          Click To Buy
        </button>
      </li>
    </>
  );
};

export default ListItems;
