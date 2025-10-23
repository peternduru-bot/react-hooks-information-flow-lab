import { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

const items = [
  { id: 1, name: "Apples", category: "Produce" },
  { id: 2, name: "Milk", category: "Dairy" },
  { id: 3, name: "Cake", category: "Dessert" },
  { id: 4, name: "Carrots", category: "Produce" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkModeClick() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={darkMode} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
