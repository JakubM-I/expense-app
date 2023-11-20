import { useState, useEffect } from "react";
import { useExpenses } from "../hooks/useExpenses";
import { useEditItem } from "../hooks/useEditItem";
import SectionPage from "../SectionPage";
import SectionHeader from "../SectionHeader";
import Form from "../AddForm";
import ExpensesList from "../ExpensesList";
import EditForm from "../EditForm";
import Modal from "../Modal";
import { StyledMain, StyledListWrapper } from "./styled";


const Expenses = () => {

    const [expList, addNewExpense, deleteExpense, saveEditExpense] = useExpenses();
    const [editItem, editExpense, isEdit, setIsEdit] = useEditItem();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const openTimeoutId = setTimeout(() => {
            setIsOpen(true)
        }, 100);

        return () => {
            clearTimeout(openTimeoutId);
        }
    }, [isEdit])

    return (
        <SectionPage>
            <SectionHeader
                title="Dodaj nową pozycję"
            />
            <Form
                addNewExpense={addNewExpense}
            />
            <SectionHeader
                title="Lista wydatków"
            />
            {/* <StyledListWrapper> */}
            <ExpensesList
                expList={expList}
                deleteExpense={deleteExpense}
                editExpense={editExpense}
            />
            <Modal isEdit={isEdit} onCLose={() => setIsEdit(false)}>
                <EditForm
                    editItem={editItem}
                    saveEditExpense={saveEditExpense}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </Modal>
            {/* </StyledListWrapper> */}
        </SectionPage>
    );
};

export default Expenses;