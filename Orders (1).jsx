function Orders({ orders, setOrders, setPage }) {
  const deleteOrder = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this order?"
  );

  if (!confirmDelete) return;

  const updated = orders.filter((o) => o.id !== id);
  setOrders(updated);
  localStorage.setItem("orders", JSON.stringify(updated));
};


  return (
    <div className="box">
      <button className="back-btn" onClick={() => setPage("home")}>
        ⬅ Back
      </button>

      <h2>Your Orders</h2>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map((o, i) => (
        <div key={i} className="order-card">
          <p><b>Order ID:</b> {o.id}</p>
          <p><b>Date:</b> {o.date}</p>

          <ul>
            {o.items.map((it, j) => (
              <li key={j}>
                {it.name} × {it.qty}
              </li>
            ))}
          </ul>

          <div className="order-actions">
  <button
    className="delete-order-btn"
    onClick={() => deleteOrder(o.id)}
  >
    Delete Order
  </button>

  <button className="edit-order-btn">
    Edit Address
  </button>
</div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
