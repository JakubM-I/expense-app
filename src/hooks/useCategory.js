import { useContext, useEffect } from "react";
import { CategoryContext } from "../context/ExpenseProvider";
import { nanoid } from "nanoid";

export const useCategory = () => {
    const {catList, setCatList} = useContext(CategoryContext);

    useEffect(() => {
        localStorage.setItem("categories", JSON.stringify(catList))
    }, [catList]);

    const addCategory = (categoryName) => {
        setCatList(catList => [
            ...catList,
            {
                id: nanoid(),
                categoryName,
            }
        ]);
    };

    const deleteCategory = (id) => {
        setCatList(catList => catList.filter(cat => cat.id !== id));
    }

    const saveEditedCategory = (selectedId, categoryName) => {
        setCatList(catList => [
            ...catList.map((cat, id) => cat.id === selectedId ?
            {...cat, categoryName} : cat)
        ]);
    } ;
 
    return [catList, addCategory, deleteCategory, saveEditedCategory];
};