import { useState, useRef } from "react";
import { StyledForm, StyledFieldset, StyledFormItem, StyledButton } from "./styled";

const Form = ({addNewExpense}) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [value, setValue] = useState("");

    const inputRef = useRef();

    const FormSubmit = (e) => {
        e.preventDefault();

        if(!name.trim()){
            return
        }

        addNewExpense(name.trim(), date, value);
        inputRef.current.focus();
        setName("");
        setDate("");
        setValue("");

    }

    return (
        <StyledForm 
            onSubmit={FormSubmit}
        >
            <StyledFieldset>
                <StyledFormItem>
                    <label htmlFor="name" >Nazwa</label>
                    <input
                        type="text"
                        id="name"
                        ref={inputRef}
                        value={name}
                        onChange={({target}) => setName(target.value)}
                    />
                </StyledFormItem>

                <StyledFormItem>
                    <label htmlFor="date">Data</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={({target}) => setDate(target.value)}
                    />
                </StyledFormItem>
                <StyledFormItem>
                    <label htmlFor="value">Kwota</label>
                    <input
                        type="number"
                        id="value"
                        value={value}
                        onChange={({target}) => setValue(target.value)}
                    />
                </StyledFormItem>
            </StyledFieldset>
            <StyledButton>Zapisz</StyledButton>
        </StyledForm>
    );
};

export default Form