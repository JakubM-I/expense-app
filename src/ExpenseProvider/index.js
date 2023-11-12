import { createContext, useState } from "react";

export const ExpensesContext = createContext();

export const ExpensesProvider = ({children}) => {

    const localCopy = localStorage.getItem("expenses") ? 
        JSON.parse(localStorage.getItem("expenses")) : [];

    const [expList, setExpList] = useState(localCopy);

    return (
        <ExpensesContext.Provider value={{expList, setExpList}}>
            {children}
        </ExpensesContext.Provider>
    );
};
