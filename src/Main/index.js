import { useState } from "react";
import Form from "../Form";
import { StyledMain } from "./styled";
import { useExpenses } from "../hooks/useExpenses";

const Main = () => {

    const [addNewExpense] = useExpenses();

    return (
        <StyledMain>
            <Form 
                addNewExpense={addNewExpense}
            />
        </StyledMain>

    );
};


export default Main;