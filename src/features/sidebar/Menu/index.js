import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiCategory, BiListUl } from "react-icons/bi";
import { StyledMenu, StyledMenuItem, StyledMenuItemName } from "./styled";

const Menu = ({collapseMenu}) => {
    const [closeItem, setCloseItem] = useState(false);
    console.log("Menu collaps:", collapseMenu);
    console.log("Close:", closeItem)

    // useEffect(() => {
    //     if(collapseMenu === false){
    //         setCloseItem(false);
    //     } 
    // }, [collapseMenu])

    return (
        <StyledMenu>
        <StyledMenuItem collapseMenu={collapseMenu}>
            <Link to="/expense-app" title="Wydatki">
                <BiListUl />
                <StyledMenuItemName 
                    collapseMenu={collapseMenu} 
                    onAnimationEnd={() => setCloseItem(collapseMenu ? true : false)} 
                    closeItem={closeItem}
                >
                    Wydatki
                </StyledMenuItemName>
            </Link>
        </StyledMenuItem>
        <StyledMenuItem collapseMenu={collapseMenu}>
            <Link to="/expense-app/categories" title="Kategorie">
                <BiCategory />
                <StyledMenuItemName 
                    collapseMenu={collapseMenu} 
                    onAnimationEnd={() => setCloseItem(collapseMenu ? true : false)} 
                    closeItem={closeItem}
                >
                    Kategorie
                </StyledMenuItemName>
            </Link>
        </StyledMenuItem>
    </StyledMenu>
    )
};

export default Menu;