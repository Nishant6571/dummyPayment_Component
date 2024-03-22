import React, { useState } from "react";
import "../styles/creditcard.css";

const Creditcard = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    isCardFlipped: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "cvv" && !formData.isCardFlipped) {
      setFormData({
        ...formData,
        isCardFlipped: true,
      });
    }
  };

  return (
    <div className="credit-card">
      <div
        className={`card-inner ${formData.isCardFlipped ? "is-flipped" : ""}`}
      >
        <div className="card-front">
          <div className="logo">
            <img src="src\assets\download.png" alt="" />
          </div>
          <div className="chip">
            <img src="src/assets/chip.jpg" alt="" />
          </div>
          <div className="card-number">
            {formData.cardNumber || "XXXX XXXX XXXX XXXX XXXX"}
          </div>
          <div className="card-holder">
            {formData.cardHolder || "CARD HOLDER"}
          </div>
          <div className="expiry">
            {formData.expiryMonth || "MM"}/{formData.expiryYear || "YY"}
          </div>
        </div>
        <div className="card-back">
          <div className="cvv">{formData.cvv || "CVV"}</div>
        </div>
      </div>
      <div className="form">
        <h4>Payment details</h4>
        <label htmlFor="cardNumber">CARD NUMBER:</label>
        <input
          id="cardNumber"
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleInputChange}
          maxLength={16}
        />
        <label htmlFor="cardHolder">CARDHOLDER NAME:</label>
        <input
          id="cardHolder"
          type="text"
          name="cardHolder"
          placeholder="Card Holder"
          value={formData.cardHolder}
          onChange={handleInputChange}
        />
        <div className="expiry-inputs">
          <div>
            <label htmlFor="expiryMonth">EXPIRY MONTH:</label>
            <input
              class="small-inputs"
              id="expiryMonth"
              type="text"
              name="expiryMonth"
              placeholder="MM"
              value={formData.expiryMonth}
              onChange={handleInputChange}
              maxLength={2}
            />
          </div>
          <div>
            <label htmlFor="expiryYear">EXPIRY YEAR:</label>
            <input
              class="small-inputs"
              id="expiryYear"
              type="text"
              name="expiryYear"
              placeholder="YY"
              value={formData.expiryYear}
              onChange={handleInputChange}
              maxLength={2}
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input
              class="small-inputs"
              id="cvv"
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleInputChange}
              maxLength={3}
            />
          </div>
        </div>
        <h3>Payment AMount: 4000</h3>
        <button>PAY</button>
      </div>
    </div>
  );
};

export default Creditcard;
