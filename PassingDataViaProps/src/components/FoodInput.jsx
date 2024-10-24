import style from "./FoodInput.module.css";

const FoodInput = () => {
   return <input className={style.Input} type="text" placeholder="Enter To Add New Food Items (-_-)" 
   onChange={(e)=>{console.log(e.target.value);
   }}/>;
};

export default FoodInput;
