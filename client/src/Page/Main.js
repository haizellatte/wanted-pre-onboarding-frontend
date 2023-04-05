import { Link } from "react-router-dom";
import * as M from "../Page/Styled/StyledComponent";

const Main = () => {
    const handleLogout = () => {
    if (localStorage.getItem("accessToken")) {
        localStorage.clear();
        alert("로그아웃 되었습니다.")
    } else {
        alert("로그아웃 상태입니다.")
    }
    }

    return (
        <M.FlexWrapper>
            <M.Container>
                <Link to="/signup"><M.Button color="#ed8bf2">Sign up</M.Button></Link>
                <Link to="/signin"><M.Button color="#3588e1">Sign in</M.Button></Link>
                <Link to="/todo"><M.Button color="#5df0fa">Todo List</M.Button></Link>
                <M.Button color="#66f9b4" onClick={handleLogout}>Log out</M.Button>
            </M.Container>
        </M.FlexWrapper>
    );
};

export default Main;