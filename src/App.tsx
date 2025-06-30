import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard.tsx";
import { Signin } from "./pages/Signin.tsx";
import { Signup } from "./pages/Signup.tsx";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>



  )
}

export default App;
