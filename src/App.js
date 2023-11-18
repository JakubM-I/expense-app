import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom';
import ExpenseList from "./ExpenseList";
import { ExpensesProvider } from './ExpenseProvider';
import Main from "./Main";
import Categories from "./Categories";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="expense-app" element={<ExpenseList />}>
    <Route path="expense-list" element={<Main />}/>
    <Route path="categories" element={<Categories />}/>
  </Route>
))

function App() {
  return (
    <ExpensesProvider>
        <RouterProvider router={router} />
    </ExpensesProvider>
  );
}

export default App;
