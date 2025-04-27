// src/components/ItemForm.js
import React, { useState } from "react";

import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newItem = {
      id: uuid(), 
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem); // Call the callback prop to pass the new item to the parent
    setItemName(""); // Reset input field
    setItemCategory("Produce"); // Reset category to default
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={itemName} // Controlled input
          onChange={(e) => setItemName(e.target.value)} // Update state on change
          required // Make this field required
        />
      </label>

      <label>
        Category:
        <select
          value={itemCategory} // Controlled select
          onChange={(e) => setItemCategory(e.target.value)} // Update state on change
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;