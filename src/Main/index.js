import { useState } from "react";
import Form from "../Form";
import Expenses from "../Expenses";
import EditForm from "../EditForm";
import { StyledMain, StyledListWrapper } from "./styled";
import { useExpenses } from "../hooks/useExpenses";
import { useEditItem } from "../hooks/useEditItem";

const Main = () => {

    const [expList, addNewExpense, deleteExpense, saveEditExpense] = useExpenses();
    const [editItem, editExpense, isEdit, setIsEdit] = useEditItem();

    return (
        <StyledMain>
            <Form
                addNewExpense={addNewExpense}
            />
            <StyledListWrapper>
                <Expenses
                    expList={expList}
                    deleteExpense={deleteExpense}
                    editExpense={editExpense}
                />
                <EditForm 
                    editItem={editItem}
                    saveEditExpense={saveEditExpense}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                // expList={expList}
                />
            </StyledListWrapper>


        </StyledMain>

    );
};

export default Main;