import { useState, useRef, useEffect } from "react";
import { StyledForm, StyledFieldset, StyledFormItem, StyledButton } from "./styled";
import { categories } from "../utilities/categories";

const Form = ({ addNewExpense }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("")

    const inputRef = useRef();

    useEffect(() => {
        const date = new Date()
        const currentDate = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
        ].join("-")
        setDate(currentDate)
    }, [])

    const FormSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            return
        }

        addNewExpense(name.trim(), date, value, category);
        inputRef.current.focus();
        setName("");
        setDate("");
        setValue("");
        setCategory("");
    }

    return (
        <StyledForm
            onSubmit={FormSubmit}
        >
            <StyledFieldset>
                <StyledFormItem>
                    <label htmlFor="value">Kwota</label>
                    <input
                        type="number"
                        id="value"
                        value={value}
                        onChange={({ target }) => setValue(target.value)}
                    />
                </StyledFormItem>
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
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.name.toLowerCase()}>{cat.name}</option>
                        ))}
                    </select>
                </StyledFormItem>
                <StyledFormItem>
                    <label htmlFor="name" >Uwagi</label>
                    <input
                        type="text"
                        id="name"
                        ref={inputRef}
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </StyledFormItem>

            </StyledFieldset>
            <StyledButton>Zapisz</StyledButton>
        </StyledForm>
    );
};

export default Form