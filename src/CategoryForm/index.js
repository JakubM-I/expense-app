import { useRef, useState } from "react";
import { 
    StyledModal,
    StyledFormHeader,
    StyledForm,
    StyledInput,
    StyledButtonWrapper,
    StyledButton,
    StyledCancelButton
} from "./styled";

const CategoryForm = ({ addCategory, isOpen, setIsOpen }) => {

    const [categoryName, setCategoryName] = useState();
    const inputRef = useRef(null)

    const submit = (e) => {
        e.preventDefault();

        if (!categoryName.trim()) {
            return
        }

        addCategory(categoryName.trim());
        setIsOpen(false)
        setCategoryName("");
    }

    const closeEdit = (e) => {
        e.stopPropagation()
        setIsOpen(false);
        setCategoryName("");
    }

    return (
        <StyledModal isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
            <StyledFormHeader>Dodaj kategorię</StyledFormHeader>
            <StyledForm onSubmit={submit}>
                <StyledInput
                    ref={inputRef}
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

export default CategoryForm;