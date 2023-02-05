import { useContext } from 'react';

import ExpensesOutput from '../components/Expenseoutput/ExpensesOutput';
import { ExpensesContext } from '../store/ExpenseContext';

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
}

export default AllExpenses;
