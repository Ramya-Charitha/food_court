function Cart({ cart, updateQty, setPage }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="box">
      <button className="back-btn" onClick={() => setPage("home")}>
        ⬅ Back
      </button>

      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item, i) => (
        <div key={i} className="cart-item">
          <span className="cart-name">
            {item.name} – ₹{item.price}
          </span>

          <div className="cart-actions">
            <button onClick={() => updateQty(item.name, "dec")}>−</button>
            <span className="cart-qty">{item.qty}</span>
            <button onClick={() => updateQty(item.name, "inc")}>+</button>
          </div>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      {cart.length > 0 && (
        <button className="place-btn" onClick={() => setPage("address")}>
          Place Order
        </button>
      )}
    </div>
  );
}

export default Cart;
