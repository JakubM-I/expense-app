import { useState, useRef, useEffect } from "react";
import { useCategory } from "../hooks/useCategory";
import { 
    StyledForm, 
    StyledFieldset, 
    StyledFormItem, 
    StyledValueWrapper, 
    StyledValueLabel, 
    StyledButton 
} from "./styled";


const Form = ({ addNewExpense }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("")
    const [catList] = useCategory();

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

        if (!value) {
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
                <StyledFormItem>
                    <label htmlFor="name" >Uwagi</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </StyledFormItem>
            </StyledFieldset>
            <StyledButton>Zapisz</StyledButton>
        </StyledForm>
    );
};

export default Form;