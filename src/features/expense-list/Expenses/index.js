import { useState, useEffect } from "react";
import { useExpenses } from "../../../hooks/useExpenses";
import { useEditItem } from "../../../hooks/useEditItem";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
import SectionPage from "../../../common/SectionPage";
import SectionHeader from "../../../common/SectionHeader";
import AddForm from "../../expense-list/AddForm";
import ExpensesList from "../ExpensesList";
import EditForm from "../EditForm"
import Modal from "../../../common/Modal";
import { PageHeader, MobileAddButton, ListHeaderWrapper } from "./styled";

const Expenses = () => {

    const [expList, addNewExpense, deleteExpense, saveEditExpense] = useExpenses();
    const [editItem, editSelectItem, isEdit, setIsEdit] = useEditItem(expList);
    const [addMobile, setAddMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const windowWidth = useWindowWidth();
    const mobileBreakPoint = 792;

    useEffect(() => {
        setIsOpen(isEdit);
    }, [isEdit]);

    const closeModal = () => {
        isOpen ?
            setIsEdit(false)
            : setAddMobile(false);
    }

    return (
        <SectionPage>
            {windowWidth.width > mobileBreakPoint
                ? (
                    <PageHeader>
                        <SectionHeader
                            title="Dodaj nową pozycję"
                        />
                        <AddForm
                            addNewExpense={addNewExpense}
                        />
                    </PageHeader>
                )
                : ("")}

            {windowWidth.width <= mobileBreakPoint
                ? (
                    <MobileAddButton onClick={() => setAddMobile(true)}>+</MobileAddButton>
                )
                : ("")}
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
                {/* {isEdit ? ( */}
                <EditForm
                    editItem={editItem}
                    saveEditExpense={saveEditExpense}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    // isOpen={isOpen}
                    // setIsOpen={setIsOpen}
                    deleteExpense={deleteExpense}
                />
                {/* ) : ""} */}
            </Modal>
            {windowWidth.width <= mobileBreakPoint
                ? (
                    <Modal isOpen={addMobile} onCLose={() => closeModal()}>
                        <AddForm
                            addNewExpense={addNewExpense}
                            setAddMobile={setAddMobile}
                        />
                    </Modal>
                ) : ""}
        </SectionPage>
    );
};

export default Expenses;