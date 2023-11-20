import Menu from "../Menu";
import { StyledBar } from "./styled"


const Sidebar = () => {

    return (
        <StyledBar>
            <h1>Expenses App</h1>
            <Menu />
        </StyledBar>
    )
};

export default Sidebar;