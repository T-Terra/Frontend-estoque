import { BrowserRouter, Routes, Route } from "react-router";
import Estoque from '../pages/Estoque.tsx'
import Login from "../pages/Login.tsx";
import AddEstoque from '../pages/AddEstoque.tsx'
import ProtectedRoute from "../components/ProtectedRoute.tsx";
import EditProduct from "../pages/EditProduct.tsx"

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/list' element={<Estoque />} />
                <Route path='/add' element={<AddEstoque />} />
                <Route path='/edit/:id' element={<EditProduct />} />
            </Route>
        </Routes>
    </BrowserRouter>
)


export default AppRoutes