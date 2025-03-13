import { Link } from "react-router"
import Logout from "../pages/Logout"
import { LucideMenu, XIcon } from "lucide-react";
import { ButtonMenu } from "./ButtonMenu";
import { NavMobileItem } from "./NavMobileItem";
import { useNavMobileContext } from "../contexts/NavMobileContext";

const NavBar = () => {
    const { isVisible, setIsVisible } = useNavMobileContext()
    return (
        <div className="pb-20 bg-gray-400">
            <nav className="bg-gray-100 shadow-lg py-4 fixed w-full">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold text-gray-800 px-6">EstoqueApp</h1>
                    <div className="hidden lg:flex max-w-6xl mx-auto flex justify-between items-center">

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
                    </div>
                    <div className="hidden lg:flex">
                        {/* Botão de Logout */}
                        <Logout />
                    </div>
                    <ButtonMenu onClick={() => setIsVisible((prev) => !prev)}>
                        { isVisible ? (
                            <XIcon size={25} />
                        ) : (
                            <LucideMenu size={25} />
                        )}
                    </ButtonMenu>
                </div>
                {isVisible && (
                    <div className="w-full h-screen bg-gray-100 fixed">
                        <div className="flex flex-col items-stretch justify-center gap-2">
                            <Link 
                                to="/list" 
                                className="text-gray-700 hover:text-gray-900 font-semibold"
                            >
                                <NavMobileItem>
                                    Listar Estoque
                                </NavMobileItem>
                            </Link>
                            <Link 
                                to="/add" 
                                className="text-gray-700 hover:text-gray-900 font-semibold"
                            >
                                <NavMobileItem>
                                    Adicionar Produto
                                </NavMobileItem>
                            </Link>
                            <NavMobileItem>
                                {/* Botão de Logout */}
                                <Logout />
                            </NavMobileItem>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default NavBar