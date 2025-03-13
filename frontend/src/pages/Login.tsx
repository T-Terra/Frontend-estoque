import { useNavigate } from "react-router"
import { useEffect } from "react"
import axios from "axios"
import Form from "../components/Form"
import { useAuth } from "../hooks/useAuth";

function Login() {
    const ApiUrl = import.meta.env.VITE_API_URL
    const navigate = useNavigate()
    const authCheck = useAuth()
    
    useEffect(() => {
        if(authCheck == true) {
            navigate('/list')
        }
    }, [authCheck, navigate])

    async function SetLogin(username: string, password: string) {
        try {
            const response = await axios.post(`${ApiUrl}login/`, {
                "username": username,
                "password": password
            }, { withCredentials: true })

            if (response.status == 200) {
                navigate("/list")
            } 

            return response
        } catch {
            alert("Credenciais Inválidas")
        }
    }

    function GetDataForm(formData: FormData) {
        const name = formData.get('name') as string
        const password = formData.get('password') as string

        SetLogin(name, password)
    }

    return (
        <Form AuthFunc={GetDataForm}/>
    )
}

export default Login