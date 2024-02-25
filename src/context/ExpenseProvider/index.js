import { createContext, useState } from "react";

export const ExpensesContext = createContext();
export const CategoryContext = createContext();
export const OpenModalContext = createContext();

export const ExpensesProvider = ({children}) => {

    const localExpCopy = localStorage.getItem("expenses") ? 
        JSON.parse(localStorage.getItem("expenses")) : [];

    const localCatCopy = localStorage.getItem("categories") ?
        JSON.parse(localStorage.getItem("categories")) : [{id:0, categoryName:  "Wybierz kategorie"}];

    const [expList, setExpList] = useState(localExpCopy);
    const [catList, setCatList] = useState(localCatCopy);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ExpensesContext.Provider value={{expList, setExpList}}>
            <CategoryContext.Provider value={{catList, setCatList}}>
                <OpenModalContext.Provider value={{isOpen, setIsOpen}}>
                    {children}
                </OpenModalContext.Provider>
            </CategoryContext.Provider>
        </ExpensesContext.Provider>
    );
};
