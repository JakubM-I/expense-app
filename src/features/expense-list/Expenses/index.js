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
import { PageHeader, MobileAddButton, ListHeaderWrapper } from "./styled";
import { theme } from "../../../assets/themes/theme";
import { OpenModalContext } from "../../../context/ExpenseProvider";

const Expenses = () => {

    const [expList, addNewExpense, deleteExpense, saveEditExpense] = useExpenses();
    const [editItem, editSelectItem, isEdit, setIsEdit] = useEditItem(expList);
    const [addMobile, setAddMobile] = useState(false)
    const {isOpen, setIsOpen} = useContext(OpenModalContext);
    const windowWidth = useWindowWidth();
    const mobileBreakPoint = 792;
    console.log("Expense:", isOpen)

    useEffect(() => {
        setIsOpen(isEdit);
    }, [isEdit]);

    const closeModal = () => {
        setIsOpen(false);
        setIsEdit(false);
        // isOpen ?
        //     setIsEdit(false)
        //     : setAddMobile(false);
    }

    return (
        <SectionPage>
            {/* {windowWidth.width > mobileBreakPoint
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
                : ("")} */}

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
                expList={expList}
                deleteExpense={deleteExpense}
                editSelectItem={editSelectItem}
            />
            {isOpen && (
                <Modal isOpen={isOpen} onCLose={() => closeModal()}>
                    {isEdit ? (
                        <EditForm
                            editItem={editItem}
                            saveEditExpense={saveEditExpense}
                            isEdit={isEdit}
                            setIsEdit={setIsEdit}
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            deleteExpense={deleteExpense}
                        />
                    ) :
                        // windowWidth.width <= mobileBreakPoint &&
                        (
                            <AddForm
                                addNewExpense={addNewExpense}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                            //    setAddMobile={setAddMobile}
                            />
                        )}
                </Modal>
            )}

            
            {/* {windowWidth.width <= mobileBreakPoint
                ? (
                    <Modal isOpen={addMobile} onCLose={() => closeModal()}>
                        <AddForm
                            addNewExpense={addNewExpense}
                            setAddMobile={setAddMobile}
                        />
                    </Modal>
                ) : ""} */}
        </SectionPage>
    );
};

export default Expenses;