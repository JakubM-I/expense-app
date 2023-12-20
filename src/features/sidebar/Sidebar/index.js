import Menu from "../Menu";
import logo from "../../../assets/logo.png"
import { StyledBar, StyledHeader, StyledLogo, StyledHeaderTitle, StyledButtonWrapper, StyledCollapseButton } from "./styled"


const Sidebar = ({ setCollapseMenu, collapseMenu }) => {



    return (
        <StyledBar>
            <StyledHeader collapseMenu={collapseMenu}>
                <StyledLogo src={logo} />
                <StyledHeaderTitle collapseMenu={collapseMenu}>Expenses App</StyledHeaderTitle>
            </StyledHeader>
            <Menu
                collapseMenu={collapseMenu}
            />
            <StyledButtonWrapper>
                <StyledCollapseButton
                    onClick={() => setCollapseMenu(!collapseMenu)}>
                    {collapseMenu ? ">>" : "<<"}
                </StyledCollapseButton>
            </StyledButtonWrapper>
        </StyledBar>
    )
};

export default Sidebar;