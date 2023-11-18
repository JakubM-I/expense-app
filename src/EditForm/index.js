import { useState, useEffect } from "react";
import { categories } from "../utilities/categories";
import {
    StyledEditModal,
    StyledInputsWrapper,
    StyledValueWrapper,
    StyledValueInput,
    StyledValueLabel,
    StyledDetailsWrapper,
    StyledWrapper,
    StyledNotesWrapper,
    StyledButtonWrapper,
    StyledButton,
    StyledCancelButton
} from "./styled";

const EditForm = ({ editItem, saveEditExpense, isEdit, setIsEdit, isOpen, setIsOpen }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    // const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setName(editItem ? editItem.name : "");
        setDate(editItem ? editItem.date : "");
        setValue(editItem ? editItem.value : "");
        setCategory(editItem ? editItem.category : "");
    }, [editItem])

    const selectId = editItem.id;

    // useEffect(() => {
    //     const openTimeoutId = setTimeout(() => {
    //         setIsOpen(true)
    //     }, 100);
    // }, [isEdit])

    const submit = (e) => {
        e.preventDefault();
        saveEditExpense(selectId, name.trim(), date, value, category);
        // setIsEdit(false);
        setIsOpen(false);
        const tiemoutId = setTimeout(() => { 
            setIsEdit(false);
        }, 350)

        return () => {
            clearTimeout(tiemoutId)
        }
    }

    const cancelEdit = () => {
        // setIsEdit(false)
        setIsOpen(false);
        const tiemoutId = setTimeout(() => { 
            setIsEdit(false);
        }, 350)

        return () => {
            clearTimeout(tiemoutId)
        }
    };

    return (
        isEdit && (
            <StyledEditModal isOpen={isOpen}>
                <form onSubmit={submit} >
                    <StyledInputsWrapper>
                        <StyledValueWrapper>
                            {/* <label htmlFor="value">Wartość</label> */}
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
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.name.toLowerCase()}>{cat.name}</option>
                                    ))}
                                </select>
                            </StyledWrapper>
                        </StyledDetailsWrapper>
                        <StyledNotesWrapper>
                            <label htmlFor="name">Uwagi</label>
                            <input id="name"
                                value={name}
                                onChange={({ target }) => setName(target.value)}
                            />
                        </StyledNotesWrapper>
                    </StyledInputsWrapper>
                    <StyledButtonWrapper>
                        <StyledButton>Zapisz</StyledButton>
                        <StyledCancelButton onClick={() => cancelEdit()}>Anuluj</StyledCancelButton>
                    </StyledButtonWrapper>
                </form>
            </StyledEditModal>
        )
    )
};

export default EditForm;