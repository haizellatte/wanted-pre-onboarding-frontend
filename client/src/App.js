import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Page/Main"
import Signup from "./Page/Certified/Signup";
import Signin from "./Page/Certified/Signin";
import Todo from "./Page/Todo/Todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
