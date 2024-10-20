import Display from "./components/Display";
import ButtonsComponent from "./components/ButtonsComponent";
import sty from "./App.module.css";

function App() {
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
    <>
      <div className={sty.calcContainer}>
        
        <Display></Display>

        <ButtonsComponent buttons = {buttons}></ButtonsComponent>
        
      </div>
    </>
  );
}

export default App;
