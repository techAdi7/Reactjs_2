import style from "./ButtonsComponent.module.css"
import Button from "./Button";

const ButtonsComponent = ({buttons}) => {
  return (
    <div className={style.buttonContainer}>
     {buttons.map(button => {
      return  <Button button = {button}></Button>
     })}
    
    </div>
  );
};

export default ButtonsComponent;
