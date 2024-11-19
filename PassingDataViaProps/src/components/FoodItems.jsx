import ListItems from "./ListItems";

// Using the advanced Array destruscturing technique and most preffered.

const FoodItems = ({sameItem}) => {
  return (
    <>
      <ul className="list-group">
        {sameItem.map((i) => (
          <ListItems handle={()=>{console.log(`${i} bought`);
          }} key={i} item={i}></ListItems>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
