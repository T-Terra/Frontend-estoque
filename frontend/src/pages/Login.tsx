import axios from "axios"
import Form from "../components/Form"

function Login() {
    const ApiUrl = import.meta.env.VITE_API_URL

    async function SetLogin(username: string, password: string) {
        try {
            const response = await axios.post(`${ApiUrl}login/`, {
                "username": username,
                "password": password
                }, { withCredentials: true })
            return response
        } catch (error) {
          console.error('Erro ao fazer login', error)
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