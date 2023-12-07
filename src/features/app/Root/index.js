import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { StyledExpesneList } from "./styled";
import Sidebar from "../../sidebar/Sidebar/index";
import MobileHeader from "../../mobile-menu/MobileHeader";

const Root = () => {
    const [mobileMenu, setMobileMenu] = useState("");

    const pageDimensions = () => {
        const windowWidth = window.innerWidth;

        if(windowWidth <= 496){
            setMobileMenu(true);
        } else {
            setMobileMenu(false);
        };
    }

    useEffect(() => {
        window.addEventListener("resize", pageDimensions);

        return () => {
            window.removeEventListener("resize", pageDimensions);
        }
    }, [])

    return (
        <StyledExpesneList>
            {mobileMenu ? 
                (<MobileHeader /> ) :
                (<Sidebar />)
            }
            <Outlet />
        </StyledExpesneList>
    )
};

export default Root;