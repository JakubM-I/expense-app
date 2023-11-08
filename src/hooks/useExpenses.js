import { useState, useEffect } from "react";

export const useExpenses = () => {

    const localCopy = localStorage.getItem("expenses") ? 
        JSON.parse(localStorage.getItem("expenses")) : [];

    const [expList, setExpList] = useState(localCopy);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expList))
    }, [expList]);

    console.log(expList);

    const addNewExpense = (name, date, value) => {
        setExpList(expList => [
            ...expList,
            {
                name: name,
                date: date,
                value: value,
            }
        ]);
    };

    return [addNewExpense];
};