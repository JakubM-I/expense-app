import { useEffect, useState } from "react";
import { useCategory } from "./useCategory";


export const useCategoryId = (category) => {
    const [catList] = useCategory();
    const [categoryId, setCategoryId] = useState("");

    useEffect(() => {
        const selectCategory = catList.filter(cat => cat.categoryName.toLowerCase() === category.toLowerCase())
        
        setCategoryId(selectCategory.length > 0 ? selectCategory[0].id : "")
    }, [category, catList]);

    return categoryId;
};