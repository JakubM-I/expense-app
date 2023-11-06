import { StyledExpesneList } from "./styled";
import Sidebar from "../Sidebar/index";
import Main from "../Main/index";


const ExpenseList = () => (
    <StyledExpesneList>
        <Sidebar />
        <Main />
    </StyledExpesneList>
);

export default ExpenseList;