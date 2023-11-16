import { StyledBackdrop } from "./styled";

const Modal = ({isEdit, onClose, children} ) =>{
return (
    <StyledBackdrop isEdit={isEdit} onClick={onClose} >
        {children}
    </StyledBackdrop>

)
};

export default Modal;