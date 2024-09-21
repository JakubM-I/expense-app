import { useState, useRef, useEffect, useContext } from "react";
import { useCategoryId } from "../../../hooks/useCategoryId";
import { FaArrowLeft } from "react-icons/fa6";
import {
    StyledAddForm,
    StyledFormHeader,
    StyledBackButton,
    StyledFormTitle,
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
    StyledCancelButton,
} from "./styled";
import { CategoryContext, OpenModalContext } from "../../../context/ExpenseProvider";
import { useLetterCounter } from "../../../hooks/useLetterCounter";

const AddForm = ({ addNewExpense }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    const nameRef = useRef();
    const letterCount = useLetterCounter(name, nameRef);
    const { isOpen, setIsOpen } = useContext(OpenModalContext);
    const { catList } = useContext(CategoryContext);
    const categoryId = useCategoryId(category);

    const valueRef = useRef();

    const nowDate = new Date();
    const currentDate = [
        nowDate.getFullYear(),
        nowDate.getMonth() <= 9 ? `0${nowDate.getMonth() + 1}` : nowDate.getMonth() + 1,
        nowDate.getDate() <= 9 ? `0${nowDate.getDate()}` : nowDate.getDate(),
    ].join("-");

    useEffect(() => {
        setDate(currentDate)
    }, [currentDate]);

    const FormSubmit = (e) => {
        e.preventDefault();

        if (!value) {
            return
        }

        addNewExpense(name.trim(), date, value, category, categoryId);
        valueRef.current.focus();
        setName("");
        setDate(currentDate);
        setValue("");
        setCategory("");
        setIsOpen(false);
    };

    const cancelAdd = () => {
        setIsOpen(false);
    };

    return (
        <StyledAddForm $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
            <StyledFormHeader>
                {window.innerWidth < 792 &&
                    (<StyledBackButton onClick={() => cancelAdd()}><FaArrowLeft /></StyledBackButton>)
                }
                <StyledFormTitle>Dodaj pozycję</StyledFormTitle>
            </StyledFormHeader>
            <form onSubmit={FormSubmit}>
                <StyledFieldset>
                    <StyledValueWrapper>
                        <StyledValueInput
                            type="number"
                            id="value"
                            ref={valueRef}
                            value={value}
                            onChange={({ target }) => setValue(target.value)}
                        />
                        <StyledValueLabel>PLN</StyledValueLabel>
                    </StyledValueWrapper>
                    <StyledDetailsWrapper>
                        <StyledWrapper>
                            <label htmlFor="date">Data</label>
                            <input
                                type="date"
                                id="date"
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
                        <label htmlFor="notes" >Uwagi</label>
                        <StyledNotesInputWrapper>
                            <input
                                type="text"
                                id="notes"
                                maxLength={25}
                                ref={nameRef}
                                value={name}
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
                    <StyledCancelButton onClick={() => cancelAdd()}>
                        Anuluj
                    </StyledCancelButton>
                </StyledButtonWrapper>
            </form>
        </StyledAddForm>

    );
};

export default AddForm;