import { useState } from "react";
import { Link } from "react-router-dom";
import { BiCategory, BiListUl } from "react-icons/bi";
import { StyledMenu, StyledMenuItem, StyledIconWrapper, StyledMenuItemName } from "./styled";

const Menu = ({ collapseMenu }) => {
    const [closeItem, setCloseItem] = useState(false);

    return (
        <StyledMenu>
            <StyledMenuItem $collapseMenu={collapseMenu}>
                <Link to="/expense-app" title="Wydatki">
                    <StyledIconWrapper>
                        <BiListUl />
                    </StyledIconWrapper>
                    <StyledMenuItemName
                        $collapseMenu={collapseMenu}
                        onAnimationEnd={() => setCloseItem(collapseMenu ? true : false)}
                        $closeItem={closeItem}
                    >
                        Wydatki
                    </StyledMenuItemName>
                </Link>
            </StyledMenuItem>
            <StyledMenuItem $collapseMenu={collapseMenu}>
                <Link to="/expense-app/categories" title="Kategorie">
                    <StyledIconWrapper>
                        <BiCategory />
                    </StyledIconWrapper>
                    <StyledMenuItemName
                        $collapseMenu={collapseMenu}
                        onAnimationEnd={() => setCloseItem(collapseMenu ? true : false)}
                        $closeItem={closeItem}
                    >
                        Kategorie
                    </StyledMenuItemName>
                </Link>
            </StyledMenuItem>
        </StyledMenu>
    )
};

export default Menu;