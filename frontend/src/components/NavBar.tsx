import { Link } from "react-router"
import Logout from "../pages/Logout"

const NavBar = () => {
    return (
        <div className="pb-20 bg-gray-400">
            <nav className="bg-gray-100 shadow-lg py-4 fixed w-full">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold text-gray-800">EstoqueApp</h1>

                    {/* Links */}
                    <ul className="flex space-x-6">
                        <li>
                            <Link 
                                to="/list" 
                                className="text-gray-700 hover:text-gray-900 font-semibold"
                            >
                                Listar Estoque
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/add" 
                                className="text-gray-700 hover:text-gray-900 font-semibold"
                            >
                                Adicionar Produto
                            </Link>
                        </li>
                    </ul>

                    {/* Botão de Logout */}
                    <Logout />
                </div>
            </nav>
        </div>
    )
}

export default NavBar