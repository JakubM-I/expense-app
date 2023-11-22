import { useContext, useEffect } from "react";
import { CategoryContext } from "../ExpenseProvider";
import { nanoid } from "nanoid";

export const useCategory = () => {
    const {catList, setCatList} = useContext(CategoryContext);

    useEffect(() => {
        localStorage.setItem("categories", JSON.stringify(catList))
    }, [catList]);

    console.log(catList);

    const addCategory = (categoryName) => {
        setCatList(catList => [
            ...catList,
            {
                id: nanoid(),
                categoryName,
            }
        ]);
    };
 
    return [catList, addCategory];
};