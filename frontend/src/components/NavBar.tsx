import { Link } from "react-router"

const NavBar = () => {
    return (
        <nav className="bg-gray-100 shadow-lg py-4">
            <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-gray-800">EstoqueApp</h1>

                {/* Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link 
                            to="/list" 
                            className="text-gray-700 hover:text-gray-900 font-semibold"
                        >
                            Estoque
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/add" 
                            className="text-gray-700 hover:text-gray-900 font-semibold"
                        >
                            Adicionar Peça
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
    );
};

export default NavBar