import style from "./Button.module.css";

const Button = ({button}) => {
  return <button className={style.button}>{button}</button>
};

export default Button;
