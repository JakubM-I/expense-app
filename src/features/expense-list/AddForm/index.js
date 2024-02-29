import { useState, useRef, useEffect } from "react";
import { useCategory } from "../../../hooks/useCategory";
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

const AddForm = ({ addNewExpense, isOpen, setIsOpen }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    const [letterCount, setLetterCount] = useState(0);
    const [catList] = useCategory();
    const categoryId = useCategoryId(category);

    const valueRef = useRef();
    const nameRef = useRef();

    const nowDate = new Date();
    const currentDate = [
        nowDate.getFullYear(),
        nowDate.getMonth() <= 9 ? `0${nowDate.getMonth() + 1}` :  nowDate.getMonth() + 1,
        nowDate.getDate() <= 9 ? `0${nowDate.getDate()}` : nowDate.getDate(),
    ].join("-");

    useEffect(() => {
        setDate(currentDate)
    }, [currentDate]);

    useEffect(() => {
        const letterCounter = nameRef.current.value.length;
        setLetterCount(letterCounter);
    }, [name]);

    const FormSubmit = (e) => {
        e.preventDefault();

        if (!value) {
            return
        }

        addNewExpense(name.trim(), date, value, category, categoryId);
        console.log("Kategoria ID:", categoryId);
        valueRef.current.focus();
        setName("");
        setDate(currentDate);
        setValue("");
        setCategory("");
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
            <form  onSubmit={FormSubmit}>
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