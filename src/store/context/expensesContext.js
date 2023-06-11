import { createContext, useReducer } from "react";
import { getExpenses } from "../../utlis/http";

export const ExpensesContext = createContext({
  expenses: [],
  isLoading: false,
  addExpense: (expense) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, expense) => {},
  setExpenses: (expenses) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [{ ...action.payload }, ...state];
    case "DELETE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE_EXPENSE":
      return state.map((expense) => (expense.id === action.payload.id ? action.payload : expense));
    case "SET_EXPENSES":
      const invertedExpenses = action.payload.reverse();
      return invertedExpenses;
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(expensesReducer, []);

  const addExpense = (expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: expense });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };
  const updateExpense = (id, expense) => {
    dispatch({ type: "UPDATE_EXPENSE", payload: { id, ...expense } });
  };
  const setExpenses = async () => {
    const expenses = await getExpenses();
    dispatch({ type: "SET_EXPENSES", payload: expenses });
  };

  const expensesContextValue = {
    expenses,
    addExpense,
    deleteExpense,
    updateExpense,
    setExpenses,
  };

  return <ExpensesContext.Provider value={expensesContextValue}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
