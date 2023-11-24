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
import EditCategoryForm from "../EditCategoryForm";

const Categories = () => {
    const [catList, addCategory, deleteCategory] = useCategory();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SectionPage>
            <SectionHeader title="Kategorie" />
            <StyledCategory>
                <StyledCategoryList>
                    <StyledFirstListItem>
                        <StyledAddButton onClick={() => setIsOpen(true)}>
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
            <Modal isOpen={isOpen} >
                <CategoryForm
                    addCategory={addCategory}
                    // isEdit={isEdit}
                    // setIsEdit={setIsEdit}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </Modal>
            {/* <Modal isEdit={isEdit} >
                <EditCategoryForm

                />

            </Modal> */}
        </SectionPage>
    )
};

export default Categories;