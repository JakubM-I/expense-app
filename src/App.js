import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom';
import { ExpensesProvider } from './ExpenseProvider';
import Root from "./Root";
import Expenses from "./Expenses";
import Categories from "./Categories";

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
