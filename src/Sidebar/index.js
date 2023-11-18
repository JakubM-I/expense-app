import { StyledBar } from "./styled"
import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <StyledBar>
            <h1>Expenses App</h1>
            <ul>
                <li>
                    <Link to="/expense-app">Wydatki</Link>
                </li>
                <li>
                    <Link to="/expense-app/categories">Kategorie</Link>
                </li>
            </ul>
        </StyledBar>
    )
};

export default Sidebar;