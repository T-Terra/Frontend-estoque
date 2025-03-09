import { BrowserRouter, Routes, Route } from "react-router";
import Estoque from '../pages/Estoque.tsx'

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/list' element={<Estoque />} />
        </Routes>
    </BrowserRouter>
)


export default AppRoutes