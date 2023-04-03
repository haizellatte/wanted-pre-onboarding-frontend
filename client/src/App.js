import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Page/Main"
import Signup from "./Page/Signup";
import Signin from "./Page/Signin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
</BrowserRouter>
  );
}

export default App;
