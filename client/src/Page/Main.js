import { Link } from "react-router-dom";
import * as M from "./StyledComponent";

const Main = () => {
    return (
        <M.FlexWrapper>
            <M.Container>
                <Link to="/signup"><button>Sign up</button></Link>
                <Link to="/signin"><button>Sign in</button></Link>
                <Link to="/todo"><button>Todo List</button></Link>
            </M.Container>
        </M.FlexWrapper>
    );
};

export default Main;