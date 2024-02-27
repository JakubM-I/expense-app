import { useContext, useState } from "react";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
import { OpenModalContext } from "../../../context/ExpenseProvider";
import Menu from "../Menu";
import logo from "../../../assets/logo.png";
import { BiPlusCircle } from "react-icons/bi";
import {
    StyledBar,
    StyledHeader,
    StyledLogo,
    StyledHeaderTitle, 
    StyledAddButtonWrapper, 
    StyledAddButton, 
    StyledAddMark,
    StyledAddName,
    StyledButtonWrapper, 
    StyledCollapseButton } from "./styled"


const Sidebar = ({ setCollapseMenu, collapseMenu }) => {

    const [closeMenu, setCloseMenu] = useState(false);
    const {isOpen, setIsOpen} = useContext(OpenModalContext);
    const windowWidth = useWindowWidth();
    const mobileBreakPoint = 792;
    console.log("Sidebar:", isOpen)
    // const [openMenu, setOpenMenu] = useState(true);
    // console.log("CloseMenu:", closeMenu);
    // console.log("Collapse:", collapseMenu);

    // useEffect(() => {
    //     if(collapseMenu === false){
    //         setCloseMenu(false);
    //     } 
    // }, [collapseMenu])

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
            <StyledHeader $collapseMenu={collapseMenu}>
                <StyledLogo src={logo} />
                <StyledHeaderTitle 
                    $collapseMenu={collapseMenu} 
                    onAnimationEnd={() => setCloseMenu(collapseMenu ? true : false)} 
                    $closeMenu={closeMenu}
                >
                        Expenses App
                </StyledHeaderTitle>
            </StyledHeader>
            {windowWidth.width > mobileBreakPoint &&
                <StyledAddButtonWrapper>
                    <StyledAddButton
                        $collapseMenu={collapseMenu}
                        onClick={() => setIsOpen(true)}
                    >
                        <StyledAddMark>
                            <BiPlusCircle />
                        </StyledAddMark>
                        <StyledAddName
                            $collapseMenu={collapseMenu}
                            $closeMenu={closeMenu}>
                            Dodaj pozycję
                        </StyledAddName>
                    </StyledAddButton>
                </StyledAddButtonWrapper>
            }
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