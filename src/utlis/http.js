import axios from "axios";
import { fireBase_URL } from "./constants/api";

const storeExpense = async (expenseData) => {
  try {
    const response = await axios.post(`${fireBase_URL}expenses.json`, expenseData);
    const id = response.data.name;

    return id;
  } catch (err) {
    console.log(err);
  }
};

const getExpenses = async () => {
  try {
    const response = await axios.get(`${fireBase_URL}expenses.json`);

    const expenses = [];
    for (const key in response.data) {
      expenses.push({
        id: key,
        ...response.data[key],
      });
    }

    return expenses;
  } catch (err) {
    console.log(err);
  }
};

const updateExpense = async (id, expenseData) => {
  try {
    const response = await axios.put(`${fireBase_URL}expenses/${id}.json`, expenseData);
    console.log(response);
    return response.data.name
  } catch (error) {
    console.log(error);
  }
};

const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(`${fireBase_URL}expenses/${id}.json`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { storeExpense, getExpenses, updateExpense, deleteExpense };
