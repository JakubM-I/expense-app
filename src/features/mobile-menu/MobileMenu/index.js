import { Link } from "react-router-dom";
import { BiCategory, BiListUl } from "react-icons/bi";
import { StyledMobileMenu, StyledMobileMenuList, StyledMobileMenuListItem } from "./styled";

const MobileMenu = ({setIsOpen}) => {
    return (
        <StyledMobileMenu onClick={(e) => e.stopPropagation()}>
            <StyledMobileMenuList>
                <StyledMobileMenuListItem>
                    <Link to="/expense-app" onClick={() => setIsOpen(false)}><BiListUl />Wydatki</Link>
                </StyledMobileMenuListItem>
                <StyledMobileMenuListItem>
                    <Link to="/expense-app/categories" onClick={() => setIsOpen(false)}><BiCategory />Kategorie</Link>
                </StyledMobileMenuListItem>
            </StyledMobileMenuList>
        </StyledMobileMenu>
    )
};

export default MobileMenu;
