const CheckEmpty = (prop) => {
  let { element } = prop.sameItem;

  let checkEmpty = {element}.length === 0 && <h3>I am still hungry.</h3>;
  return <>{checkEmpty}</>;
};

export default CheckEmpty;
