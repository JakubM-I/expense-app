import { StyledExpesneList } from "./styled";
import Sidebar from "../Sidebar/index";
import Main from "../Main/index";
import { Outlet } from "react-router-dom";


const ExpenseList = () => (
    <StyledExpesneList>
        <Sidebar />
        <main>
            <Outlet />
        </main>
        {/* <Main /> */}
    </StyledExpesneList>
);

export default ExpenseList;