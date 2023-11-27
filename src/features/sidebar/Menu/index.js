import { Link } from "react-router-dom";
import { BiCategory, BiListUl } from "react-icons/bi";
import { StyledMenu, StyledMenuItem } from "./styled";

const Menu = () => (
    <StyledMenu>
        <StyledMenuItem>
            <Link to="/expense-app"><BiListUl /><span>Wydatki</span></Link>
        </StyledMenuItem>
        <StyledMenuItem>
            <Link to="/expense-app/categories"><BiCategory /><span>Kategorie</span></Link>
        </StyledMenuItem>
    </StyledMenu>
);

export default Menu;