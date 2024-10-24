import style from "./ButtonsComponent.module.css";
import Button from "./Button";

const ButtonsComponent = ({onbuttonClick}) => {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style.buttonContainer}>
      {buttons.map((button) => {
        return <Button onbuttonClick={onbuttonClick} key={button} button={button} ></Button>;
      })}
    </div>
  );
};

export default ButtonsComponent;
