import { useState } from "react";
export default function Client({ onOrder }) {
  const [order, setOrder] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onOrder(order);
    setOrder("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          placeholder="Enter your order"
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
