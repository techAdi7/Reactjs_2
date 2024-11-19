// [Note :- Add key press event in this calculator to calculate the desired MATHEMATICAL expressons . ADD IT LATER!!!!!! ]

import Display from "./components/Display";
import ButtonsComponent from "./components/ButtonsComponent";
import sty from "./App.module.css";
import { useState } from "react";

function App() {
  //[ *** VERY IMPORTANT NOTE *** : const is the better option as the current value can't be changed and the reference also can't gets changed .]

  const [CalVal, setCalVal] = useState(" ");

  const onbuttonClick = (buttonClicked) => {
    // now applying the cases as per the calci requirement

    if (buttonClicked === "C") {
      // clear ups the entire input box.
      setCalVal("");
    } else if (buttonClicked === "=") {
      // evaluating the current state value using the
      // eval()  method as it takes mathematical expressions as string and solve it and gives the evaluated value

      // [NOTE :- TO KNOW MORE ABOUT eval() METHOD REFER TO THIS LINK =>]
      const result = eval(CalVal);

      // setting the new state as result of the evaluated value
      setCalVal(result);
    } else {
      const newValue = CalVal + buttonClicked;

      // setting the new state as updated one
      setCalVal(newValue);
    }
  };

  return (
    <>
      <div className={sty.calcContainer}>
        <Display displayValue={CalVal}></Display>

        <ButtonsComponent onbuttonClick={onbuttonClick}></ButtonsComponent>
      </div>
    </>
  );
}

export default App;
