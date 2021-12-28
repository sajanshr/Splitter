import React from "react";
export default function Amount({ title, amount }) {
  return (
    <div className="amount">
      <div className="amountTitle">
        <p style={{ color: "#e8f8fa" }}>{title}</p>
        <p style={{ color: "#71a0a4" }}>person</p>
      </div>
      {amount ? (
        <h3 className="amountDisplay">${amount.toFixed(2)}</h3>
      ) : (
        <h3 className="amountDisplay">$0.00</h3>
      )}
    </div>
  );
}
