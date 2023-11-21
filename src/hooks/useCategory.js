import { useContext, useEffect } from "react";
import { CategoryContext } from "../ExpenseProvider";

export const useCategory = () => {
    const {catList, setCatList} = useContext(CategoryContext);

    useEffect(() => {
        localStorage.setItem("categories", JSON.stringify(catList))
    }, [catList]);

    return [catList]
};