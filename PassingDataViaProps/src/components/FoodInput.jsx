import style from "./FoodInput.module.css";

const FoodInput = ({handleOnChange}) => {
  return (
    <input
      className={style.Input}
      type="text"
      placeholder="Enter To Add New Food Items (-_-)"
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
