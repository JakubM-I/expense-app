import Menu from "../Menu";
import logo from "../../../assets/logo.png"
import { StyledBar, StyledHeader, StyledLogo, StyledHeaderTitle } from "./styled"


const Sidebar = ({setCollapseMenu, collapseMenu}) => {



    return (
        <StyledBar>
            <StyledHeader>
                <StyledLogo src={logo} />
                <StyledHeaderTitle>Expenses App</StyledHeaderTitle>
            </StyledHeader>
            <Menu />
            <button onClick={() => setCollapseMenu(!collapseMenu)}>Zwiń</button>
        </StyledBar>
    )
};

export default Sidebar;