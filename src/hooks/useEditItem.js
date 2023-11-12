import { useState } from "react";
import { useExpenses } from "./useExpenses";

export const useEditItem = () => {

    const [expList] = useExpenses();
    console.log(expList)
    const [editItem, setEditItem] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    const editExpense = (selectedId) => {
        // const selectItem  = expList.filter(exp => exp.id === id);
        const selectItem = expList.find(({id}) => id === selectedId);
        console.log(selectItem)
        setEditItem(selectItem);
        setIsEdit(true);
    };

    return [editItem, editExpense, isEdit, setIsEdit];
};