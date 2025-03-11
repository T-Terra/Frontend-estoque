import axios from "axios"
import { useNavigate } from "react-router"
import ButtonLogout from "../components/ButtonLogout"

function Logout() {
    const ApiUrl = import.meta.env.VITE_API_URL
    const navigate = useNavigate()

    const handlerLogout = () => {
        const response = axios.post(`${ApiUrl}logout/`, {}, {
            withCredentials: true
        })

        navigate('/')

        return response
    }


    return (
        <ButtonLogout onLogout={handlerLogout}/>
    )
}

export default Logout