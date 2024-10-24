// Using the propes object.
import styl from "./FoodItems.module.css";
import style from "./ListItems.module.css";

const ListItems = ({item}) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event.target.value);
    
    console.log(`Buy ${item} Button Clicked`);
  };

  return (
    <>
      <li className={`${styl.color} list-group-item`}>
        {item}
        <button
          type="button"
          className={`${style.myButton} btn btn-info`}
          onClick={handleBuyButtonClicked}
        >
          Click To Buy
        </button>
      </li>
    </>
  );
};

export default ListItems;
