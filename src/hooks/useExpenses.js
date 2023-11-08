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
                id: expList.length ? expList[expList.length - 1].id + 1 : 1,
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