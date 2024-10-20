// Passing values by props  (Properties):-
import CheckEmpty from "../../PassingDataViaProps/src/components/CheckEmp";

function App() {
  let healthyItems = [
    "Dal",
    "Fruits",
    "Milk",
    "Fish",
    "Roti",
    "Ghee",
    "Salad",
    "Vegetables",
  ];

  

  return (
    <>
      <h1>Healthy Food Items:-</h1>

      <CheckEmpty></CheckEmpty>

      <ul className="list-group">
        {healthyItems.map((i) => (
          <li key={i} className="list-group-item">
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
