import { useState } from "react";
import Form from "../Form";
import Expenses from "../Expenses";
import { StyledMain } from "./styled";
import { useExpenses } from "../hooks/useExpenses";

const Main = () => {

    const [expList, addNewExpense, deleteExpense] = useExpenses();

    return (
        <StyledMain>
            <Form 
                addNewExpense={addNewExpense}
            />
            <Expenses 
                expList={expList}
                deleteExpense={deleteExpense}
            />
        </StyledMain>

    );
};


export default Main;