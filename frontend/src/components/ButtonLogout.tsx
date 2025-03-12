import { AxiosResponse } from "axios"

type Logout = {
    onLogout: () => Promise<AxiosResponse>
}

const ButtonLogout = ({ onLogout }: Logout) => {
    return (
        <button 
            onClick={onLogout}
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        >
            Logout
        </button>
    )
}

export default ButtonLogout