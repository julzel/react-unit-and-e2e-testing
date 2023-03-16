import "./App.css";
import ItemList from "./components/ItemList";

function App() {
  const items = ["apple", "banana", "cherry", "date"];

  return (
    <div>
      <h1>My Items</h1>
      <ItemList items={items} />
    </div>
  );
}

export default App;
