import { useState, useEffect } from "react";
import { useExpenses } from "../../../hooks/useExpenses";
import { useEditItem } from "../../../hooks/useEditItem";
import SectionPage from "../../../common/SectionPage";
import SectionHeader from "../../../common/SectionHeader";
import Form from "../../expense-list/AddForm";
import ExpensesList from "../ExpensesList";
import EditForm from "../EditForm"
import Modal from "../../../common/Modal";
import { PageHeader, ListHeaderWrapper } from "./styled";

const Expenses = () => {

    const [expList, addNewExpense, deleteExpense, saveEditExpense] = useExpenses();
    const [editItem, editSelectItem, isEdit, setIsEdit] = useEditItem(expList);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(isEdit);
    }, [isEdit]);

    const closeModal = () => {
        setIsEdit(false);
    }

    return (
        <SectionPage>
            <PageHeader>
                <SectionHeader
                    title="Dodaj nową pozycję"
                />
                <Form
                    addNewExpense={addNewExpense}
                />
            </PageHeader>
            <ListHeaderWrapper>
                <SectionHeader
                    title="Lista wydatków"
                />
            </ListHeaderWrapper>
            <ExpensesList
                expList={expList}
                deleteExpense={deleteExpense}
                editSelectItem={editSelectItem}
            />
            <Modal isOpen={isOpen} onCLose={() => closeModal()}>
                <EditForm
                    editItem={editItem}
                    saveEditExpense={saveEditExpense}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </Modal>
        </SectionPage>
    );
};

export default Expenses;