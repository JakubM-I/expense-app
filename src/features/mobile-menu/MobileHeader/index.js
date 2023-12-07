import logo from "../../../assets/logo.png";
import { StyledMobileHeader, StyledLogo } from "./styled";

const MobileHeader = () => {
    return (
        <StyledMobileHeader>
            <StyledLogo src={logo} />
        </StyledMobileHeader>
    )
};

export default MobileHeader;