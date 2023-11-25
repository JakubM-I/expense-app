import { useEffect, useRef, useState } from "react";
import { 
    StyledModal,
    StyledForm,
    StyledInput,
    StyledButtonWrapper,
    StyledButton,
    StyledCancelButton
} from "./styled";

const EditCategoryForm = ({ isEdit, isOpen, setIsOpen, setIsEdit, editItem, saveEditedCategory }) => {

    const [categoryName, setCategoryName] = useState("");
    // const inputRef = useRef(null)
    console.log("edit:", isEdit, "open:",isOpen)
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
            <p>Edytuj kategorię</p>
            <StyledForm onSubmit={submit}>
                <StyledInput
                    // ref={inputRef}
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