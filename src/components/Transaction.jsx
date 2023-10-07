/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import img from "../assets/remove.png";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div className="transaction">
      <li
        key={transaction.id}
        className={transaction.amount < 0 ? " minus" : "plus"}
      >
        <span>{transaction.description}</span>
        <span>
          {sign}
          {Math.abs(transaction.amount)}€
        </span>
      </li>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        <img src={img} alt="My Image" />
      </button>
    </div>
  );
};

export default Transaction;
