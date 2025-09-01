import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Load plants from backend
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Filter plants by search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle stock status
  const toggleStock = (id) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
      )
    );
  };

  // Add new plant
  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  return (
    <div className="app">
      <h1>🌱 Plantsy Admin</h1>

      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <NewPlantForm onAddPlant={handleAddPlant} />

      <div className="plants-grid">
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            toggleStock={toggleStock}
          />
        ))}
      </div>
    </div>
  );
}

// Plant Card Component
function PlantCard({ plant, toggleStock }) {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button
        onClick={() => toggleStock(plant.id)}
        className={plant.inStock ? "in-stock" : "out-of-stock"}
      >
        {plant.inStock ? "In Stock" : "Out of Stock"}
      </button>
    </div>
  );
}

export default App;
