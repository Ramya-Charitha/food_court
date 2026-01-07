import { useState, useEffect } from "react";
import Header from "./Header";
import FoodCard from "./FoodCard";
import Cart from "./Cart";
import AddressForm from "./AddressForm";
import Orders from "./Orders";
import foods from "./data";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState(() => {
  return JSON.parse(localStorage.getItem("orders")) || [];
});
useEffect(() => {
  localStorage.setItem("orders", JSON.stringify(orders));
}, [orders]);

  const addToCart = (food) => {
    const found = cart.find((i) => i.name === food.name);
    if (found) {
      setCart(
        cart.map((i) =>
          i.name === food.name ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...food, qty: 1 }]);
    }
  };

  const updateQty = (name, type) => {
    setCart(
      cart
        .map((i) =>
          i.name === name
            ? { ...i, qty: type === "inc" ? i.qty + 1 : i.qty - 1 }
            : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  return (
    <>
      <Header cartCount={cart.reduce((a, b) => a + b.qty, 0)} setPage={setPage} />

      {page === "home" && (
        <div className="grid">
          {foods.map((food, i) => (
            <FoodCard
              key={i}
              food={food}
              addToCart={addToCart}
              cart={cart}
            />
          ))}
        </div>
      )}

      {page === "cart" && (
        <Cart cart={cart} updateQty={updateQty} setPage={setPage} />
      )}

      {page === "address" && (
        <AddressForm
          cart={cart}
          orders={orders}
          setOrders={setOrders}
          setCart={setCart}
          setPage={setPage}
        />
      )}

      {page === "orders" && (
        <Orders orders={orders} setOrders={setOrders} setPage={setPage} />
      )}
    </>
  );
}

export default App;
