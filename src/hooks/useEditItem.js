import { useState } from "react";
import { useExpenses } from "./useExpenses";

export const useEditItem = (editedList) => {

    // const [expList] = useExpenses();
    // console.log(expList)
    const [editItem, setEditItem] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    const editSelectItem = (selectedId) => {
        // const selectItem  = expList.filter(exp => exp.id === id);
        const selectItem = editedList.find(({id}) => id === selectedId);
        // console.log(selectItem)
        setEditItem(selectItem);
        setIsEdit(true);
    };

    return [editItem, editSelectItem, isEdit, setIsEdit];
};