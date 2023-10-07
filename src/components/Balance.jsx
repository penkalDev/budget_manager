import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h3>Current balance</h3>
      <h2 className={total < 0 ? "balance minus" : "balance"}>{total}€</h2>
    </div>
  );
};

export default Balance;
