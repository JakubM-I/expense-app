import Menu from "../Menu";
import logo from "../../../assets/logo.png"
import { StyledBar, StyledHeader, StyledLogo, StyledHeaderTitle, StyledButtonWrapper, StyledCollapseButton } from "./styled"
import { useEffect, useState } from "react";


const Sidebar = ({ setCollapseMenu, collapseMenu }) => {

    const [closeMenu, setCloseMenu] = useState(false);
    const [openMenu, setOpenMenu] = useState(true);
    console.log("CloseMenu:", closeMenu);
    console.log("Collapse:", collapseMenu);

    useEffect(() => {
        if(collapseMenu === false){
            setCloseMenu(false);
        } 
    }, [collapseMenu])

    // const closeAnimation = () => {
    //         console.log("closeAnimation on")
    //         if(collapseMenu === true){
    //             setCloseMenu(true);
    //         }
            // console.log(e)
            // if(e.animationName === "hideTitle"){
            //     setCloseMenu(true);
            // } else if(e.animationName === "showTitle"){
            //     setCloseMenu(false);
            // }
    // };

    // const openAnimation = () => {
    //         if(collapseMenu === false && openMenu === true){
    //             setCloseMenu(false);
    //         };
    // };

    return (
        <StyledBar>
            <StyledHeader collapseMenu={collapseMenu}>
                <StyledLogo src={logo} />
                <StyledHeaderTitle 
                    collapseMenu={collapseMenu} 
                    // onAnimationStart={() => setCloseMenu(false)}
                    onAnimationEnd={() => setCloseMenu(!closeMenu)} 
                    closeMenu={closeMenu}
                    openMenu={openMenu}
                >
                        Expenses App
                </StyledHeaderTitle>
            </StyledHeader>
            <Menu
                collapseMenu={collapseMenu}
            />
            <StyledButtonWrapper>
                <StyledCollapseButton
                    onClick={() => setCollapseMenu(!collapseMenu)}>
                    {collapseMenu ? ">>" : "<<"}
                </StyledCollapseButton>
            </StyledButtonWrapper>
        </StyledBar>
    )
};

export default Sidebar;