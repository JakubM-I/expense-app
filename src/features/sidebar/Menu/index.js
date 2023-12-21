import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiCategory, BiListUl } from "react-icons/bi";
import { StyledMenu, StyledMenuItem, StyledMenuItemName } from "./styled";

const Menu = ({collapseMenu}) => {
    const [closeItem, setCloseItem] = useState(false);

    useEffect(() => {
        if(collapseMenu === false){
            setCloseItem(false);
        } 
    }, [collapseMenu])

    return (
        <StyledMenu>
        <StyledMenuItem collapseMenu={collapseMenu}>
            <Link to="/expense-app" title="Wydatki">
                <BiListUl />
                <StyledMenuItemName collapseMenu={collapseMenu} onAnimationEnd={() => setCloseItem(!closeItem)} closeItem={closeItem}>
                    Wydatki
                </StyledMenuItemName>
            </Link>
        </StyledMenuItem>
        <StyledMenuItem collapseMenu={collapseMenu}>
            <Link to="/expense-app/categories" title="Kategorie">
                <BiCategory />
                <StyledMenuItemName collapseMenu={collapseMenu} onAnimationEnd={() => setCloseItem(!closeItem)} closeItem={closeItem}>
                    Kategorie
                </StyledMenuItemName>
            </Link>
        </StyledMenuItem>
    </StyledMenu>
    )
};

export default Menu;