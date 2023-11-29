import { useState, useRef, useEffect } from "react";
import { useCategory } from "../../../hooks/useCategory";
import {
    StyledForm,
    StyledFieldset,
    StyledFormItem,
    StyledValueWrapper,
    StyledValueLabel,
    StyledNotesItem,
    StyledNotesWrapper,
    StyledLetterCounter,
    StyledButton
} from "./styled";


const Form = ({ addNewExpense }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("")
    const [letterCount, setLetterCount] = useState(0)
    const [catList] = useCategory();

    const inputRef = useRef();
    const nameRef = useRef();

    const nowDate = new Date()
    const currentDate = [
        nowDate.getFullYear(),
        nowDate.getMonth() + 1,
        nowDate.getDate(),
    ].join("-")

    useEffect(() => {
        setDate(currentDate)
    }, [currentDate])

    useEffect(() => {
        const letterCounter = nameRef.current.value.length;
        setLetterCount(letterCounter);
    }, [name])

    const FormSubmit = (e) => {
        e.preventDefault();

        if (!value) {
            return
        }

        addNewExpense(name.trim(), date, value, category);
        inputRef.current.focus();
        setName("");
        setDate(currentDate);
        setValue("");
        setCategory("");
    }

    return (
        <StyledForm
            onSubmit={FormSubmit}
        >
            <StyledFieldset>
                <StyledValueWrapper>
                    <input
                        type="number"
                        id="value"
                        ref={inputRef}
                        value={value}
                        onChange={({ target }) => setValue(target.value)}
                    />
                    <StyledValueLabel>PLN</StyledValueLabel>
                </StyledValueWrapper>
                <StyledFormItem>
                    <label htmlFor="date">Data</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={({ target }) => setDate(target.value)}
                    />
                </StyledFormItem>
                <StyledFormItem>
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
                </StyledFormItem>
                <StyledNotesItem>
                    <label htmlFor="notes" >Uwagi</label>
                    <StyledNotesWrapper>
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
                    </StyledNotesWrapper>
                </StyledNotesItem>
            </StyledFieldset>
            <StyledButton>Zapisz</StyledButton>
        </StyledForm>
    );
};

export default Form;