import { useContext, useState, useEffect } from "react";
import { useExpenses } from "../../../hooks/useExpenses";
import { useEditItem } from "../../../hooks/useEditItem";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
import SectionPage from "../../../common/SectionPage";
import SectionHeader from "../../../common/SectionHeader";
import AddForm from "../../expense-list/AddForm";
import ExpensesList from "../ExpensesList";
import EditForm from "../EditForm"
import Modal from "../../../common/Modal";
import { MobileAddButton, ListHeaderWrapper } from "./styled";
import { theme } from "../../../assets/themes/theme";
import { ExpensesContext, OpenModalContext } from "../../../context/ExpenseProvider";

const Expenses = () => {
    const { expList } = useContext(ExpensesContext);
    const [, addNewExpense, deleteExpense, saveEditExpense] = useExpenses();
    const [editItem, editSelectItem, isEdit, setIsEdit] = useEditItem(expList);
    const [addMobile, setAddMobile] = useState(false)
    const {isOpen, setIsOpen} = useContext(OpenModalContext);
    const windowWidth = useWindowWidth();
    const mobileBreakPoint = 792;

    useEffect(() => {
        setIsOpen(isEdit);
    }, [isEdit]);

    const closeModal = () => {
        setIsOpen(false);
        setIsEdit(false);
    }

    return (
        <SectionPage>
            {windowWidth.width <= mobileBreakPoint
                && (
                    <MobileAddButton onClick={() => setIsOpen(true)}>+</MobileAddButton>
                )}
            <ListHeaderWrapper>
                <SectionHeader
                    title="Lista wydatków"
                />
            </ListHeaderWrapper>
            <ExpensesList

                deleteExpense={deleteExpense}
                editSelectItem={editSelectItem}
            />
            {isOpen && (
                <Modal onClose={() => closeModal()}>
                    {isEdit ? (
                        <EditForm
                            editItem={editItem}
                            saveEditExpense={saveEditExpense}
                            isEdit={isEdit}
                            setIsEdit={setIsEdit}
                            deleteExpense={deleteExpense}
                        />
                    ) :
                        (
                            <AddForm
                                addNewExpense={addNewExpense}
                            />
                        )}
                </Modal>
            )}
        </SectionPage>
    );
};

export default Expenses;