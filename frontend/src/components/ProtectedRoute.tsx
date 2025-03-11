import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
import NavBar from "./NavBar";

export default function ProtectedRoute() {
    const isAuthenticated = useAuth()

    if (isAuthenticated === null) {
        return <p className="text-center text-gray-700">Carregando...</p>; // Exibe um loading enquanto verifica
    }

    return isAuthenticated ? (
        <>
            <NavBar />
            <Outlet />
        </>
    ) : <Navigate to='/' replace />
}
