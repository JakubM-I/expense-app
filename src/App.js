import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ExpensesProvider } from './context/ExpenseProvider';
import Root from "./features/app/Root";
import Expenses from "./features/expense-list/Expenses";
import Categories from "./features/categories/Categories";
import EditForm from './features/expense-list/EditForm';

const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/expense-app",
    children: [
      {
        element: <Expenses />,
        path: "/expense-app",
        children: [
          {
            element: <EditForm />,
            path: "expense/:expId"
          }
        ]
      },
      {
        element: <Categories />,
        path: "categories"
      }
    ],
  }
])

function App() {
  return (
    <ExpensesProvider>
      <RouterProvider router={router} />
    </ExpensesProvider>
  );
}

export default App;
