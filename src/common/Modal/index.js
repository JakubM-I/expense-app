import { StyledBackdrop } from "./styled";

const Modal = ({ isOpen, onClose, children }) => (
    <StyledBackdrop isOpen={isOpen} onClick={onClose} >
        {children}
    </StyledBackdrop>
);

export default Modal;