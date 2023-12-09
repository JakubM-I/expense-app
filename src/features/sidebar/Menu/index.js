import { Link } from "react-router-dom";
import { BiCategory, BiListUl } from "react-icons/bi";
import { StyledMenu, StyledMenuItem, StyledMenuItemName } from "./styled";

const Menu = ({collapseMenu}) => (
    <StyledMenu>
        <StyledMenuItem collapseMenu={collapseMenu}>
            <Link to="/expense-app">
                <BiListUl />
                <StyledMenuItemName collapseMenu={collapseMenu}>
                    Wydatki
                </StyledMenuItemName>
            </Link>
        </StyledMenuItem>
        <StyledMenuItem collapseMenu={collapseMenu}>
            <Link to="/expense-app/categories">
                <BiCategory />
                <StyledMenuItemName collapseMenu={collapseMenu}>
                    Kategorie
                </StyledMenuItemName>
            </Link>
        </StyledMenuItem>
    </StyledMenu>
);

export default Menu;