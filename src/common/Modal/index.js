import { useContext } from "react";
import { StyledBackdrop } from "./styled";
import { OpenModalContext } from "../../context/ExpenseProvider";

const Modal = ({ onClose, children }) => {
    const isOpen = useContext(OpenModalContext)

    return (
        <StyledBackdrop $isOpen={isOpen} onClick={onClose} >
            {children}
        </StyledBackdrop>
    )
};

export default Modal;