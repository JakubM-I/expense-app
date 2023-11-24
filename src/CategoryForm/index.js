import { useRef, useState } from "react";
import { 
    StyledModal,
    StyledForm,
    StyledInput,
    StyledButtonWrapper,
    StyledButton,
    StyledCancelButton
} from "./styled";

const CategoryForm = ({ isEdit, addCategory, setIsEdit, isOpen, setIsOpen }) => {

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

    const closeEdit = () => {
        setIsOpen(false);
        setCategoryName("");
    }

    return (
        // isEdit &&(
        <StyledModal isOpen={isOpen}>
            <p>Dodaj kategorię</p>
            <StyledForm onSubmit={submit}>
                <StyledInput
                    ref={inputRef}
                    value={categoryName}
                    onChange={({ target }) => setCategoryName(target.value)}
                />
                <StyledButtonWrapper>
                    <StyledButton>Zapisz</StyledButton>
                    <StyledCancelButton onClick={() => closeEdit()}>Anuluj</StyledCancelButton>
                </StyledButtonWrapper>
            </StyledForm>
        </StyledModal>
        // )

    )
};

export default CategoryForm;