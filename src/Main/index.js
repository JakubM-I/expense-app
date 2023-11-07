import { useState } from "react";
import Form from "../Form";
import { StyledMain } from "./styled";

const Main = () => {

    const [expList, setExpList] = useState([]);

    console.log(expList);

    const addNewExpense = (name, date, value) => {
        setExpList(expList => [
            ...expList,
            {
                name: name,
                date: date,
                value: value,
            }
        ]);
    };


    return (
        <StyledMain>
            <Form 
                addNewExpense={addNewExpense}
            />
        </StyledMain>

    );
};


export default Main;