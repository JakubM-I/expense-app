import { Outlet } from "react-router-dom";
import { StyledExpesneList } from "./styled";
import Sidebar from "../../sidebar/Sidebar/index";

const Root = () => (
    <StyledExpesneList>
        <Sidebar />
        <Outlet />
    </StyledExpesneList>
);

export default Root;