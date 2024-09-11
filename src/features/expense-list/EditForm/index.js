import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryContext, ExpensesContext, OpenModalContext } from "../../../context/ExpenseProvider";
import { useLetterCounter } from "../../../hooks/useLetterCounter";
import { useEditItem } from "../../../hooks/useEditItem";
import { useExpenses } from "../../../hooks/useExpenses";
import { useCategoryId } from "../../../hooks/useCategoryId";
import Modal from "../../../common/Modal";
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

const EditForm = () => {
    const { expList } = useContext(ExpensesContext);
    const { isOpen, setIsOpen } = useContext(OpenModalContext);
    const { catList } = useContext(CategoryContext);
    const [editItem, editSelectItem, isEdit, setIsEdit] = useEditItem(expList);
    const [, , deleteExpense, saveEditExpense] = useExpenses();

    const { expId } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    // const [letterCount, setLetterCount] = useState(0);
    const nameRef = useRef();
    const letterCount = useLetterCounter(name, nameRef);
    const categoryId = useCategoryId(category);


    useEffect(() => {
        editSelectItem(expId);
    }, [expId, editSelectItem])

    useEffect(() => {
        setName(editItem ? editItem.name : "");
        setDate(editItem ? editItem.date : "");
        setValue(editItem ? editItem.value : "");
        setCategory(editItem ? editItem.category : "");
    }, [editItem])

    const selectId = editItem.id;

    const submit = (e) => {
        e.preventDefault();
        saveEditExpense(selectId, name.trim(), date, value, category, categoryId);
        setIsOpen(false);
        navigate(-1);
        // setTimeout(() => {
        //     setIsEdit(false);
        // }, 310);
    }

    const deleteItem = () => {
        console.log(selectId)
        deleteExpense(selectId);
        setIsEdit(false);
    }

    const cancelEdit = (e) => {
        e.preventDefault();
        e.stopPropagation()
        setIsOpen(false);
        navigate(-1);
        // setTimeout(() => {
        //     setIsEdit(false);
        // }, 310);
    };

    return (
        <Modal>
            <StyledEditModal
                // $isEdit={isEdit} 
                $isOpen={isOpen}
                onClick={(e) => e.stopPropagation()}
            >
                <StyledFormHeader>
                    {window.innerWidth < 792 ?
                        (<StyledBackButton onClick={(e) => cancelEdit(e)}>
                            <FaArrowLeft />
                        </StyledBackButton>)
                        : ""
                    }
                    <StyledFormTitle>Edytuj pozycję</StyledFormTitle>
                    {window.innerWidth < 792 ?
                        (<StyledDeleteButton onClick={() => deleteItem()}>
                            <FaRegTrashCan />
                        </StyledDeleteButton>)
                        : ""
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
                        <StyledCancelButton onClick={(e) => cancelEdit(e)}>
                            Anuluj
                        </StyledCancelButton>
                    </StyledButtonWrapper>
                </form>
            </StyledEditModal>
        </Modal>

    )
};

export default EditForm;