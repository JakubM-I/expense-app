import ExpenseList from './ExpenseList';
import { ExpensesProvider } from './ExpenseProvider';

function App() {
  return (
    <ExpensesProvider>
        <ExpenseList />
    </ExpensesProvider>
  );
}

export default App;
