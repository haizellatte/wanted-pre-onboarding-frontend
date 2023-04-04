import { Link } from "react-router-dom";
import * as M from "./StyledComponent";

const Main = () => {
    return (
        <M.FlexWrapper>
            <M.Container>
                <Link to="/signup"><M.Button color="#ed8bf2">Sign up</M.Button></Link>
                <Link to="/signin"><M.Button color="#66d3f1">Sign in</M.Button></Link>
                <Link to="/todo"><M.Button color="#73f7d1">Todo List</M.Button></Link>
            </M.Container>
        </M.FlexWrapper>
    );
};

export default Main;