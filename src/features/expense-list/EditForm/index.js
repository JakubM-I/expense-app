import { useState, useEffect, useRef } from "react";
import { useCategory } from "../../../hooks/useCategory";
import { useCategoryId } from "../../../hooks/useCategoryId";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import {
    StyledEditModal,
    StyledFormHeader,
    StyledBackButton,
    StyledFormTitle,
    StyledDeleteButton,
    StyledFieldset,
    StyledValueWrapper,
    StyledValueInput,
    StyledValueLabel,
    StyledDetailsWrapper,
    StyledWrapper,
    StyledNotesWrapper,
    StyledNotesInputWrapper,
    StyledLetterCounter,
    StyledButtonWrapper,
    StyledButton,
    StyledCancelButton
} from "./styled";

const EditForm = ({ editItem, saveEditExpense, isEdit, setIsEdit, isOpen, setIsOpen, deleteExpense }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    const [letterCount, setLetterCount] = useState(0);
    const [catList] = useCategory();
    const nameRef = useRef();
    const categoryId = useCategoryId(category);

    useEffect(() => {
        setName(editItem ? editItem.name : "");
        setDate(editItem ? editItem.date : "");
        setValue(editItem ? editItem.value : "");
        setCategory(editItem ? editItem.category : "");
    }, [editItem])

    const selectId = editItem.id;

    useEffect(() => {
        const letterCounter = nameRef.current.value.length;
        setLetterCount(letterCounter);
    }, [name]);

    // useEffect(() => {
    //     const selectCategory = catList.filter(cat => cat.categoryName.toLowerCase() === category)
        
    //     setCategoryId(selectCategory.length > 0 ? selectCategory[0].id : "")
    // }, [category])

    const submit = (e) => {
        e.preventDefault();
        saveEditExpense(selectId, name.trim(), date, value, category, categoryId);
        setIsOpen(false);
        setTimeout(() => {
            setIsEdit(false);
        }, 310);
        // setIsEdit(false);
    }

    const deleteItem = () => {
        console.log(selectId)
        deleteExpense(selectId);
        setIsEdit(false);
    }

    const cancelEdit = () => {
        setIsOpen(false);
        setTimeout(() => {
            setIsEdit(false);
        }, 310);
        // setIsEdit(false);
    };

    return (
        <StyledEditModal isEdit={isEdit} isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
            <StyledFormHeader>
                {window.innerWidth < 792 ? 
                    (<StyledBackButton onClick={() => cancelEdit()}><FaArrowLeft /></StyledBackButton>) : ""
                }
                <StyledFormTitle>Edytuj pozycję</StyledFormTitle>
                {window.innerWidth < 792 ? 
                    (<StyledDeleteButton onClick={() => deleteItem()}><FaRegTrashCan /></StyledDeleteButton> ): ""
                    }
            </StyledFormHeader>
            <form onSubmit={submit} >
                <StyledFieldset>
                    <StyledValueWrapper>
                        <StyledValueInput id="value"
                            value={value}
                            onChange={({ target }) => setValue(target.value)}
                        />
                        <StyledValueLabel>PLN</StyledValueLabel>
                    </StyledValueWrapper>
                    <StyledDetailsWrapper>
                        <StyledWrapper>
                            <label htmlFor="date">Data</label>
                            <input id="date"
                                type="date"
                                value={date}
                                onChange={({ target }) => setDate(target.value)}
                            />
                        </StyledWrapper>
                        <StyledWrapper>
                            <label htmlFor="category">Kategoria</label>
                            <select
                                id="category"
                                value={category}
                                onChange={({ target }) => setCategory(target.value)}
                            >
                                {catList.map(cat => (
                                    <option
                                        key={cat.id}
                                        value={cat.categoryName.toLowerCase()}
                                    >
                                        {cat.categoryName}
                                    </option>
                                ))}
                            </select>
                        </StyledWrapper>
                    </StyledDetailsWrapper>
                    <StyledNotesWrapper>
                        <label htmlFor="name">Uwagi</label>
                        <StyledNotesInputWrapper>
                            <input id="name"
                                value={name}
                                maxLength={25}
                                ref={nameRef}
                                onChange={({ target }) => setName(target.value)}
                            />
                            <StyledLetterCounter>
                                ({letterCount}/25)
                            </StyledLetterCounter>
                        </StyledNotesInputWrapper>
                    </StyledNotesWrapper>
                </StyledFieldset>
                <StyledButtonWrapper>
                    <StyledButton>Zapisz</StyledButton>
                    <StyledCancelButton onClick={() => cancelEdit()}>Anuluj</StyledCancelButton>
                </StyledButtonWrapper>
            </form>
        </StyledEditModal>
    )
};

export default EditForm;