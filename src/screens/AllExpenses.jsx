import React from "react";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { ExpensesContext } from "../store/context/expensesContext";
import { getExpenses } from "../utlis/http";
import LoadingOverLay from "../components/ui/LoadingOverLays";
import ErrorOverLay from "../components/ui/ErrorOverLay";

export default function AllExpenses() {
  const expensesCTX = React.useContext(ExpensesContext);
  const [fetchExpenses, setFetchExpenses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const fetchExpensesData = async () => {
    setIsLoading(true);
    try {
      const expenses = await getExpenses();
      expensesCTX.setExpenses(expenses);
      setFetchExpenses(expenses);
    } catch (error) {
      setIsError(true);
      let errorMessage = "Could not fetch expenses" + "\n" + error?.message;
      setErrorMessage(errorMessage);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchExpensesData();
  }, []);

  const handleErrors = () => {
    setIsError(false);
    setErrorMessage(null);
  };

  return (
    <LoadingOverLay isLoading={isLoading}>
      <ErrorOverLay isError={isError && !isLoading} errorMessage={errorMessage}
        onTryAgain={handleErrors}
      >
        <ExpensesOutput periodName="Total" expenses={fetchExpenses} fallBackText={"No expenses yet"} />
      </ErrorOverLay>
    </LoadingOverLay>
  );
}
