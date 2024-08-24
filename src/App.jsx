import { useState } from "react";
import Client from "./components/Client.jsx";
import Serveur from "./components/Serveur.jsx";
import Menu from "./components/Menu.jsx";
import "./App.css";

function App() {
  const [order, setOrder] = useState("");
  const [response, setResponse] = useState("");

  const availableItems = ["Cofee", "Tea", "Cappucino", "Expresso"];
  const handleOrder = (order) => {
    setOrder(order);
    if (availableItems.includes(order)) {
      setResponse(`Votre commande ${order} est en cours de préparation.`);
    } else {
      setResponse(`Votre demande ${order} n'est pas disponible`);
    }
  };

  return (
    <>
      <nav>
        <h1>Coffee Shop</h1>
      </nav>
      <div classNameName="content">
        <Client onOrder={handleOrder} />
        <Serveur response={response} />
        <Menu items={availableItems} />
      </div>
    </>
  );
}

export default App;
