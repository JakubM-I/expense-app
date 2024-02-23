import { useState, useRef, useEffect } from "react";
import { useCategory } from "../../../hooks/useCategory";
import { useCategoryId } from "../../../hooks/useCategoryId";
import { FaArrowLeft } from "react-icons/fa6";
import {
    StyledAddForm,
    StyledFormHeader,
    StyledCancelButton,
    StyledFormTitle,
    StyledFieldset,
    StyledFormItem,
    StyledValueWrapper,
    StyledValueLabel,
    StyledNotesItem,
    StyledNotesWrapper,
    StyledLetterCounter,
    StyledButton
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

    // useEffect(() => {
    //     const selectCategory = catList.filter(cat => cat.categoryName.toLowerCase() === category)
    //     console.log("Form effect:", category);
        
    //     setCategoryId(selectCategory.length > 0 ? selectCategory[0].id : "")
    // }, [category])

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

    return (
        <StyledAddForm isOpen={isOpen}
            onSubmit={FormSubmit } 
        >
            {/* {window.innerWidth < 792 ? (             */}
            <StyledFormHeader>
                <StyledCancelButton onClick={() => setIsOpen(false)}><FaArrowLeft /></StyledCancelButton>
                <StyledFormTitle>Dodaj pozycję</StyledFormTitle>

            </StyledFormHeader>
            {/* ) : "" } */}

            <StyledFieldset>
                <StyledValueWrapper>
                    <input
                        type="number"
                        id="value"
                        ref={valueRef}
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
        </StyledAddForm>
    );
};

export default AddForm;