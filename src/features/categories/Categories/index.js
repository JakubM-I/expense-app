import { useState, useEffect } from "react";
import { useEditItem } from "../../../hooks/useEditItem";
import { useCategory } from "../../../hooks/useCategory";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import SectionPage from "../../../common/SectionPage";
import SectionHeader from "../../../common/SectionHeader";
import CategoryForm from "../CategoryForm";
import Modal from "../../../common/Modal";
import EditCategoryForm from "../EditCategoryForm";
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
import { useExpenses } from "../../../hooks/useExpenses";

const Categories = () => {
    const [catList, addCategory, deleteCategory, saveEditedCategory] = useCategory();
    const [editItem, editSelectItem, isEdit, setIsEdit] = useEditItem(catList);
    const [,,,, updateCategory] = useExpenses();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(isEdit);
    }, [isEdit]);

    const closeModal = () => {
        setIsOpen(false);
        setIsEdit(false);
    }

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
                                    <StyledEditButton onClick={() => editSelectItem(category.id)}>
                                        <FaRegEdit />
                                    </StyledEditButton>
                                    <StyledDeleteButton onClick={() => deleteCategory(category.id)}>
                                        <FaRegTrashCan />
                                    </StyledDeleteButton>
                                </StyledButtonWrapper>
                            </StyledListItem>
                        ))
                    }
                </StyledCategoryList>
            </StyledCategory>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={() => closeModal()}>
                    {isEdit ? (
                        <EditCategoryForm
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            setIsEdit={setIsEdit}
                            editItem={editItem}
                            saveEditedCategory={saveEditedCategory}
                            updateCategory={updateCategory}
                        />
                    ) : (
                        <CategoryForm
                            addCategory={addCategory}
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />
                    )}
                </Modal>
            )}

        </SectionPage>
    )
};

export default Categories;