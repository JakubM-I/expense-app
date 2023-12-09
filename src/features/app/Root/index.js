import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { StyledExpesneList } from "./styled";
import Sidebar from "../../sidebar/Sidebar/index";
import MobileHeader from "../../mobile-menu/MobileHeader";

const Root = () => {
    const [mobileMenu, setMobileMenu] = useState("");
    const [appStatus, setAppStatus] = useState({
        status: "loading",
    });
    const [collapseMenu, setCollapseMenu] = useState(false);

    const pageDimensions = () => {
        const windowWidth = window.innerWidth;

        if(windowWidth <= 496){
            setMobileMenu(true);
        } else {
            setMobileMenu(false);
        };
    }

    useEffect(() => {
        pageDimensions();

        window.addEventListener("resize", pageDimensions);

        return () => {
            window.removeEventListener("resize", pageDimensions);
        }
    }, [])

    return (
        <StyledExpesneList collapseMenu={collapseMenu}>
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