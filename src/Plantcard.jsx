function PlantCard({ plant }) {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>   {/* <-- should show now */}
      <p>${plant.price}</p>
      <button className={plant.inStock ? "in-stock" : "out-of-stock"}>
        {plant.inStock ? "In Stock" : "Out of Stock"}
      </button>
    </div>
  );
}
export default PlantCard;
