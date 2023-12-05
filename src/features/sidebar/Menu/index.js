import { Link } from "react-router-dom";
import { BiCategory, BiListUl } from "react-icons/bi";
import { StyledMenu, StyledMenuItem, StyledMenuItemName } from "./styled";

const Menu = () => (
    <StyledMenu>
        <StyledMenuItem>
            <Link to="/expense-app"><BiListUl /><StyledMenuItemName>Wydatki</StyledMenuItemName></Link>
        </StyledMenuItem>
        <StyledMenuItem>
            <Link to="/expense-app/categories"><BiCategory /><StyledMenuItemName>Kategorie</StyledMenuItemName></Link>
        </StyledMenuItem>
    </StyledMenu>
);

export default Menu;