import { useState } from 'react';
import Hamburger from 'hamburger-react'
import logo from "../../../assets/logo.png";
import Modal from '../../../common/Modal';
import MobileMenu from '../MobileMenu';
import { StyledMobileHeader, StyledLogo } from "./styled";

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledMobileHeader>
            <StyledLogo src={logo} />
            <Hamburger toggled={isOpen} toggle={setIsOpen} hideOutline={false}/>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            </Modal>
        </StyledMobileHeader>
        
    )
};

export default MobileHeader;