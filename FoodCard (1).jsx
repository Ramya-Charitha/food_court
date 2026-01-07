function FoodCard({ food, addToCart, cart }) {
  const item = cart.find((i) => i.name === food.name);
  const qty = item ? item.qty : 0;

  return (
    <div className="food-card">
      <img src={`/images/${food.image}`} alt={food.name} />

      <div className="food-info">
        <h3 className="food-name">{food.name}</h3>
        <h4 className="food-price">₹{food.price}</h4>

        <div className="add-cart-box">
          <button className="add-btn" onClick={() => addToCart(food)}>
            ➕ Add to Cart
          </button>
          {qty > 0 && <span className="qty-badge">{qty}</span>}
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
