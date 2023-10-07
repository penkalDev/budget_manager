const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      }
      case "ADD_TRANSACTION":
        return{
          ...state,
          transactions: [action.payload, ...state.transactions]// adding new transaction to existing transactions

        }

    default:
      return state;
  }
};

export default AppReducer;
