function AddressForm({ cart, setCart, orders, setOrders, setPage }) {
  const placeOrder = () => {
    if (cart.length === 0) return;

    const newOrder = {
      id: "ORD" + Date.now(),
      date: new Date().toLocaleString(),
      items: cart,
    };

    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    setCart([]);
    localStorage.removeItem("cart");

    setPage("orders");
  };

  return (
    <div className="address-tab">
      <h2>Delivery Address</h2>

      <input placeholder="Name" />
      <input placeholder="Phone" />
      <textarea placeholder="Address" />

      <button className="confirm-btn" onClick={placeOrder}>
        Confirm & Place Order
      </button>
    </div>
  );
}

export default AddressForm;
