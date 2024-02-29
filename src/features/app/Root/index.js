import { useEffect, useState } from "react";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
import { Outlet } from "react-router-dom";
import { StyledExpesneList } from "./styled";
import Sidebar from "../../sidebar/Sidebar/index";
import MobileHeader from "../../mobile-menu/MobileHeader";

const Root = () => {
    const windowWidth = useWindowWidth();
    const [mobileMenu, setMobileMenu] = useState("");
    const [collapseMenu, setCollapseMenu] = useState(false);

    useEffect(() => {
        if(windowWidth.width <= 496){
            setMobileMenu(true);
        } else {
            setMobileMenu(false);
        };
    }, [windowWidth.width])

    return (
        <StyledExpesneList $collapseMenu={collapseMenu}>
            {mobileMenu ? 
                (<MobileHeader /> ) :
                (<Sidebar 
                    collapseMenu={collapseMenu}
                    setCollapseMenu={setCollapseMenu} />)
            }
            <Outlet />
        </StyledExpesneList>
    )
};

export default Root;