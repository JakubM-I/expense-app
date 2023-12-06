import Menu from "../Menu";
import logo from "../../../assets/logo.png"
import { StyledBar, StyledHeader, StyledLogo, StyledHeaderTitle } from "./styled"


const Sidebar = () => {

    return (
        <StyledBar>
            <StyledHeader>
                <StyledLogo src={logo} />
                <StyledHeaderTitle>Expenses App</StyledHeaderTitle>
            </StyledHeader>
            <Menu />
        </StyledBar>
    )
};

export default Sidebar;