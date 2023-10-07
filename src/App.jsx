import Header from "./components/Header";
import Balance from "./components/Balance";
import MoneyOverview from "./components/MoneyOverview";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="main-content">
          <Header />
          <MoneyOverview />
          <Balance />
          <AddTransaction />
        </div>
        <div className="sidebar">
          <TransactionHistory />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
