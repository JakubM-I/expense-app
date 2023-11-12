import { useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";
import { ExpensesContext } from "../ExpenseProvider";

export const useExpenses = () => {

    const {expList, setExpList} = useContext(ExpensesContext);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expList))
    }, [expList]);

    console.log(expList);

    const addNewExpense = (name, date, value, category) => {
        setExpList(expList => [
            ...expList,
            {
                id: nanoid(),
                name,
                date,
                value,
                category,
            }
        ]);
    };

    const deleteExpense = (id) => {
        setExpList(expList => expList.filter(exp => exp.id !== id));
    };

    const saveEditExpense = (selectId, name, date, value, category) => {
        setExpList(expList => [
            ...expList.map((exp, id) => exp.id === selectId 
            ? {...exp, name, date, value, category} : exp)
        ]);
    };

    return [expList, addNewExpense, deleteExpense, saveEditExpense];
};