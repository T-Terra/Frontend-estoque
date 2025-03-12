import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useUpdateTokens } from "../hooks/useUpdateTokens";
import NavBar from "./NavBar";

export default function ProtectedRoute() {
    const isAuthenticated = useAuth()
    useUpdateTokens() // remover depois 
    if (isAuthenticated === null) {
        return <p className="text-center text-gray-700">Carregando...</p>; // Exibe um loading enquanto verifica
    }

    return isAuthenticated ? (
        <div className="w-full overflow-x-hidden">
            <NavBar />
            <Outlet />
        </div>
    ) : <Navigate to='/' replace />
}
