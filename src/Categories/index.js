import { IconContext } from "react-icons";
import { FaRegTrashCan } from "react-icons/fa6"
import { FaRegEdit } from "react-icons/fa"
import SectionPage from "../SectionPage";
import SectionHeader from "../SectionHeader";
import { categories } from "../utilities/categories";
import {
    StyledCategory,
    StyledCategoryList,
    StyledListItem,
    StyledFirstListItem,
    StyledAddButton,
    StyledCategoryName,
    StyledButtonWrapper,
    StyledEditButton,
    StyledDeleteButton,
} from "./styled";
import { useCategory } from "../hooks/useCategory";
import CategoryForm from "../CategoryForm";
import { useState, useEffect } from "react";
import Modal from "../Modal";

const Categories = () => {
    const [catList, addCategory, deleteCategory] = useCategory();
    const [isEdit, setIsEdit] = useState(false);

    // useEffect(() => {
    //     const openTimeoutId = setTimeout(() => {
    //         setIsEdit(true)
    //     }, 100);

    //     return () => {
    //         clearTimeout(openTimeoutId);
    //     }
    // }, [isEdit])

    return (
        <SectionPage>
            <SectionHeader title="Kategorie" />
            <StyledCategory>
                <StyledCategoryList>
                    <StyledFirstListItem>
                        <StyledAddButton onClick={() => setIsEdit(true)}>
                            Dodaj kategorię
                        </StyledAddButton>
                    </StyledFirstListItem>
                    {[...catList]
                        .filter(category => category.id !== 0)
                        .sort((a, b) => a.categoryName.localeCompare(b.categoryName))
                        .map(category => (
                            <StyledListItem key={category.id}>
                                <StyledCategoryName>
                                    {category.categoryName}
                                </StyledCategoryName>
                                <StyledButtonWrapper>
                                    {/* <IconContext.Provider> */}
                                    <StyledEditButton>
                                        <FaRegEdit />
                                    </StyledEditButton>
                                    <StyledDeleteButton onClick={() => deleteCategory(category.id)}>
                                        <FaRegTrashCan />
                                    </StyledDeleteButton>
                                    {/* </IconContext.Provider> */}
                                </StyledButtonWrapper>
                            </StyledListItem>
                        ))
                    }
                </StyledCategoryList>
            </StyledCategory>
            <Modal isEdit={isEdit} >
                <CategoryForm
                    addCategory={addCategory}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                />
            </Modal>
        </SectionPage>
    )
};

export default Categories;