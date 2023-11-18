import { useState, useEffect } from "react";
import Form from "../Form";
import Expenses from "../Expenses";
import EditForm from "../EditForm";
import Modal from "../Modal";
import { StyledMain, StyledListWrapper } from "./styled";
import { useExpenses } from "../hooks/useExpenses";
import { useEditItem } from "../hooks/useEditItem";

const Main = () => {

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
            </StyledListWrapper>
        </StyledMain>
    );
};

export default Main;