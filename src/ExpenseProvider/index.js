import { createContext, useState } from "react";

export const ExpensesContext = createContext();
export const CategoryContext = createContext();

export const ExpensesProvider = ({children}) => {

    const localExpCopy = localStorage.getItem("expenses") ? 
        JSON.parse(localStorage.getItem("expenses")) : [];

    const [expList, setExpList] = useState(localExpCopy);
    const [catList, setCatList] = useState();

    return (
        <ExpensesContext.Provider value={{expList, setExpList}}>
            <CategoryContext.Provider value={{catList, setCatList}}>
                {children}
            </CategoryContext.Provider>
        </ExpensesContext.Provider>
    );
};
