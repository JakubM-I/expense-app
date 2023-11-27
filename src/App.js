import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom';
import { ExpensesProvider } from './context/ExpenseProvider';
import Root from "./features/app/Root";
import Expenses from "./features/expense-list/Expenses";
import Categories from "./features/categories/Categories";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/expense-app" element={<Root />}>
    <Route index element={<Expenses />}/>
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
