import { useEffect, useState } from "react";
import { 
    StyledModal,
    StyledFormHeader,
    StyledForm,
    StyledInput,
    StyledButtonWrapper,
    StyledButton,
    StyledCancelButton
} from "./styled";

const EditCategoryForm = ({ isOpen, setIsOpen, setIsEdit, editItem, saveEditedCategory }) => {

    const [categoryName, setCategoryName] = useState("");

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
        setIsOpen(false);
        setIsEdit(false);
        setCategoryName("");
    }

    const closeEdit = (e) => {
        e.stopPropagation();
        setIsOpen(false);
        setIsEdit(false);
        setCategoryName("");
    }

    return (
        <StyledModal isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
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