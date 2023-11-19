import { Outlet } from "react-router-dom";
import { StyledExpesneList } from "./styled";
import Sidebar from "../Sidebar/index";

const Root = () => (
    <StyledExpesneList>
        <Sidebar />
        {/* <main> */}
            <Outlet />
        {/* </main> */}
    </StyledExpesneList>
);

export default Root;