// src/App.js
import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import itemData from "../data/items"; // Import item data

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleItemFormSubmit = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]); // Add new item to the list
  };

  return (
    <div className={isDarkMode ? "App dark-mode" : "App"}>
      <Header toggleDarkMode={toggleDarkMode} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;