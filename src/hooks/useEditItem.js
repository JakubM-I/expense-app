import { useState } from "react";

export const useEditItem = (editedList) => {

    const [editItem, setEditItem] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    const editSelectItem = (selectedId) => {

        const selectItem = editedList.find(({id}) => id === selectedId);

        setEditItem(selectItem);
        setIsEdit(true);
    };

    return [editItem, editSelectItem, isEdit, setIsEdit];
};