import { useContext, useEffect, useState } from "react";
import { 
    StyledModal,
    StyledFormHeader,
    StyledForm,
    StyledInput,
    StyledButtonWrapper,
    StyledButton,
    StyledCancelButton
} from "./styled";
import { OpenModalContext } from "../../../context/ExpenseProvider";

const EditCategoryForm = ({ setIsEdit, editItem, saveEditedCategory, updateCategory }) => {

    const [categoryName, setCategoryName] = useState("");
    const {isOpen, setIsOpen} = useContext(OpenModalContext);

    useEffect(() => {
        setCategoryName(editItem ? editItem.categoryName : "")
    }, [editItem]);

    const selectId = editItem.id;

    const submit = (e) => {
        e.preventDefault();

        if (!categoryName.trim()) {
            return
        }

        saveEditedCategory(selectId, categoryName.trim());
        updateCategory(selectId, categoryName.trim());
        setIsOpen(false);
        setTimeout(() => {
            setIsEdit(false);
        }, 310)
        setCategoryName("");
    }

    const closeEdit = (e) => {
        e.stopPropagation();
        setIsOpen(false);
        setTimeout(() => {
            setIsEdit(false);
        }, 310)
        
        setCategoryName("");
    }

    return (
        <StyledModal $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
            <StyledFormHeader>Edytuj kategorię</StyledFormHeader>
            <StyledForm onSubmit={submit}>
                <StyledInput
                    value={categoryName}
                    onChange={({ target }) => setCategoryName(target.value)}
                />
                <StyledButtonWrapper>
                    <StyledButton>Zapisz</StyledButton>
                    <StyledCancelButton onClick={(e) => closeEdit(e)}>Anuluj</StyledCancelButton>
                </StyledButtonWrapper>
            </StyledForm>
        </StyledModal>
    )
};

export default EditCategoryForm;