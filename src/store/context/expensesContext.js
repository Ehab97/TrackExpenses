import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (expense) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, expense) => {},
  getExpense: (id) => {},
  getExpenses: () => {},
  getRecentExpenses: () => {},
  getAllExpenses: () => {},
  // getExpensesByDate: (date) => {},
  // getExpensesByMonth: (month) => {},
  // getExpensesByYear: (year) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      const id = new Date().getTime().toString() + Math.random().toString();
      return [...state, { ...action.payload, id }];
    case "DELETE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE_EXPENSE":
      return state.map((expense) => (expense.id === action.payload.id ? action.payload : expense));
    case "GET_EXPENSE":
        return state.find((expense) => expense.id === action.payload);
    default:
      return state;
  }
};

const DUMMY_EXPENSES = [
  {
    id: "e1",
    descrption: "Toilet Paper",
    amount: 94.12,
    date: new Date("2023-06-6"),
  },
  {
    id: "e2",
    descrption: "New TV",

    amount: 799.49,
    date: new Date("2021-02-12"),
  },
  {
    id: "e3",
    descrption: "Car Insurance",

    amount: 294.67,
    date: new Date("2021-02-28"),
  },
  {
    id: "e4",
    descrption: "New Desk (Wooden)",

    amount: 450,
    date: new Date("2021-05-12"),
  },
  {
    id: "e5",
    descrption: "New Desk (Wooden)",

    amount: 450,
    date: new Date("2021-05-12"),
  },
];

const ExpensesContextProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: expense });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };
  const updateExpense = (id, expense) => {
    dispatch({ type: "UPDATE_EXPENSE", payload: { id, ...expense } });
  };
  const getExpense = (id) => {
    dispatch({ type: "GET_EXPENSE", payload: id });
  };
  const getExpenses = () => {};
  const getRecentExpenses = () => {};
  const getAllExpenses = () => {};

  const expensesContextValue = {
    expenses,
    addExpense,
    deleteExpense,
    updateExpense,
    getExpense,
    getExpenses,
    getRecentExpenses,
    getAllExpenses,
  };

  return <ExpensesContext.Provider value={expensesContextValue}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
