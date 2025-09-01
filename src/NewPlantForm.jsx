import React, { useState } from "react";
import "./App.css";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image || !price) return;

    const newPlant = {
      id: Date.now(),
      name,
      image,
      price: parseFloat(price),
      inStock: true,
    };

    onAddPlant(newPlant);

    // reset form
    setName("");
    setImage("");
    setPrice("");
  }

  return (
    <form className="new-plant-form" onSubmit={handleSubmit}>
      <h2>➕ Add New Plant</h2>
      <input
        type="text"
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;
