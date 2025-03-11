import { Link } from "react-router"

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
                        <li>
                            <Link 
                                to="#" 
                                className="text-gray-700 hover:text-gray-900 font-semibold"
                            >
                                Editar Produto
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="#" 
                                className="text-gray-700 hover:text-gray-900 font-semibold"
                            >
                                Excluir Produto
                            </Link>
                        </li>
                    </ul>

                    {/* Botão de Logout */}
                    <button 
                        className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                    >
                        Logout
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar