import { useEffect, useState } from "react";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
import { Outlet } from "react-router-dom";
import { StyledExpesneList } from "./styled";
import Sidebar from "../../sidebar/Sidebar/index";
import MobileHeader from "../../mobile-menu/MobileHeader";

const Root = () => {
    const windowWidth = useWindowWidth();
    console.log(windowWidth.width);
    const [mobileMenu, setMobileMenu] = useState("");
    console.log(mobileMenu);
    // const [appStatus, setAppStatus] = useState({
    //     status: "loading",
    // });
    const [collapseMenu, setCollapseMenu] = useState(false);

    // const pageDimensions = () => {
    //     const windowWidth = window.innerWidth;

    //     if(windowWidth <= 496){
    //         setMobileMenu(true);
    //     } else {
    //         setMobileMenu(false);
    //     };
    // }

    useEffect(() => {
        if(windowWidth.width <= 496){
            setMobileMenu(true);
        } else {
            setMobileMenu(false);
        };
    }, [windowWidth.width])

    // useEffect(() => {
    //     pageDimensions();

    //     window.addEventListener("resize", pageDimensions);

    //     return () => {
    //         window.removeEventListener("resize", pageDimensions);
    //     }
    // }, [])

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