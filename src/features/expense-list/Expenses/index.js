import { useContext, useEffect } from "react";
import { useExpenses } from "../../../hooks/useExpenses";
import { useEditItem } from "../../../hooks/useEditItem";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
import SectionPage from "../../../common/SectionPage";
import SectionHeader from "../../../common/SectionHeader";
import AddForm from "../../expense-list/AddForm";
import ExpensesList from "../ExpensesList";
import Modal from "../../../common/Modal";
import { MobileAddButton, ListHeaderWrapper } from "./styled";
import { theme } from "../../../assets/themes/theme";
import { ExpensesContext, OpenModalContext } from "../../../context/ExpenseProvider";
import { Outlet } from "react-router-dom";

const Expenses = () => {
    const { expList } = useContext(ExpensesContext);
    const [, addNewExpense, deleteExpense, saveEditExpense] = useExpenses();
    const [editItem, editSelectItem, isEdit, setIsEdit] = useEditItem(expList);
    const { isOpen, setIsOpen } = useContext(OpenModalContext);
    const windowWidth = useWindowWidth();
    const mobileBreakPoint = theme.breakpoints.tablet;

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
                    <AddForm
                        addNewExpense={addNewExpense}
                    />
                </Modal>
            )}
            <Outlet />
        </SectionPage>
    );
};

export default Expenses;