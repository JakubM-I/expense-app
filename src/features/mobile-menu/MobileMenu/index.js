import { Link } from "react-router-dom";
import { BiCategory, BiListUl } from "react-icons/bi";
import { StyledMobileMenu, StyledMobileMenuList, StyledMobileMenuListItem } from "./styled";

const MobileMenu = () => {
    return (
        <StyledMobileMenu onClick={(e) => e.stopPropagation()}>
            <StyledMobileMenuList>
                <StyledMobileMenuListItem>
                    <Link to="/expense-app"><BiListUl />Wydatki</Link>
                </StyledMobileMenuListItem>
                <StyledMobileMenuListItem>
                    <Link to="/expense-app/categories"><BiCategory />Kategorie</Link>
                </StyledMobileMenuListItem>
            </StyledMobileMenuList>
        </StyledMobileMenu>
    )
};

export default MobileMenu;
