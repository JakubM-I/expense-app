import { useState, useEffect } from "react";
import { useExpenses } from "../../../hooks/useExpenses";
import { useEditItem } from "../../../hooks/useEditItem";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
import SectionPage from "../../../common/SectionPage";
import SectionHeader from "../../../common/SectionHeader";
import Form from "../../expense-list/AddForm";
import ExpensesList from "../ExpensesList";
import EditForm from "../EditForm"
import Modal from "../../../common/Modal";
import { PageHeader, MobileAddButton, ListHeaderWrapper } from "./styled";

const Expenses = () => {

    const [expList, addNewExpense, deleteExpense, saveEditExpense] = useExpenses();
    const [editItem, editSelectItem, isEdit, setIsEdit] = useEditItem(expList);
    const [isOpen, setIsOpen] = useState(false);
    const windowWidth = useWindowWidth();

    useEffect(() => {
        setIsOpen(isEdit);
    }, [isEdit]);

    const closeModal = () => {
        setIsEdit(false);
    }

    return (
        <SectionPage>
            {windowWidth.width > 792 ? (
            <PageHeader>
                <SectionHeader
                    title="Dodaj nową pozycję"
                />
                <Form
                    addNewExpense={addNewExpense}
                />
            </PageHeader>
            ) : ("")}

            {windowWidth.width <= 792 ? (
                    <MobileAddButton>+</MobileAddButton>
                ) : (
                    ""
                )}
            
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
                    // isOpen={isOpen}
                    // setIsOpen={setIsOpen}
                    deleteExpense={deleteExpense}
                />
            </Modal>
        </SectionPage>
    );
};

export default Expenses;