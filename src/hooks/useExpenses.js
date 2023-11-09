import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

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
                id: nanoid(),
                name: name,
                date: date,
                value: value,
            }
        ]);
    };

    const deleteExpense = (id) => {
        setExpList(expList => expList.filter(exp => exp.id !== id));
    };

    return [expList, addNewExpense, deleteExpense];
};