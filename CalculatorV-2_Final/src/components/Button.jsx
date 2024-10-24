import style from "./Button.module.css";

const Button = ({ button, onbuttonClick}) => {
  

  return (
    <button onClick={() => onbuttonClick(button)} className={style.button}>
      {button}
    </button>
  );
};

export default Button;
