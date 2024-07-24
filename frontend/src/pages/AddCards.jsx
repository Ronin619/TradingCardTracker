import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import Cookies from "js-cookie";

const AddCards = () => {
  const [set, setSet] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const [marketValue, setMarketValue] = useState("");

  const handleSubmitCard = async (e) => {
    e.preventDefault();
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.post(
        "https://localhost:8080/createCard/newCard",
        {
          set,
          name,
          cardNumber,
          quantity,
          marketValue,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // Ensure authToken is correctly set
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log("Card not saved", error);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmitCard}>
        <label htmlFor="set">Set</label>
        <input
          type="text"
          value={set}
          id="set"
          onChange={(e) => setSet(e.target.value)}
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          value={cardNumber}
          id="cardNumber"
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          value={quantity}
          id="quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label htmlFor="marketValue">Market Value</label>
        <input
          type="text"
          value={marketValue}
          id="marketValue"
          onChange={(e) => setMarketValue(e.target.value)}
        />
        <Button text="Add Card" type="Submit" />
      </form>
    </div>
  );
};

export default AddCards;
