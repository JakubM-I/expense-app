import { Link } from "react-router-dom";
import { BiCategory, BiListUl } from "react-icons/bi";
import { StyledMobileMenu, StyledMobileMenuList, StyledMobileMenuListItem } from "./styled";

const MobileMenu = ({isOpen, setIsOpen}) => {

    const onLinkClick = (e) => {
        setIsOpen(false);
        e.target.blur();
    }

    return (
        <StyledMobileMenu isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
            <StyledMobileMenuList>
                <StyledMobileMenuListItem>
                    <Link to="/expense-app" onClick={(e) => onLinkClick(e)}>
                        <BiListUl />Wydatki
                    </Link>
                </StyledMobileMenuListItem>
                <StyledMobileMenuListItem>
                    <Link to="/expense-app/categories" onClick={(e) => onLinkClick(e)}>
                        <BiCategory />Kategorie
                    </Link>
                </StyledMobileMenuListItem>
            </StyledMobileMenuList>
        </StyledMobileMenu>
    )
};

export default MobileMenu;
