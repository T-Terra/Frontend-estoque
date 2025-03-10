import { BrowserRouter, Routes, Route } from "react-router";
import Estoque from '../pages/Estoque.tsx'
import Login from "../pages/Login.tsx";
import AddEstoque from '../pages/AddEstoque.tsx'

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/list' element={<Estoque />} />
            <Route path='/add' element={<AddEstoque />} />
        </Routes>
    </BrowserRouter>
)


export default AppRoutes