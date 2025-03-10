import { BrowserRouter, Routes, Route } from "react-router";
import Estoque from '../pages/Estoque.tsx'
import Login from "../pages/Login.tsx";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/list' element={<Estoque />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
)


export default AppRoutes