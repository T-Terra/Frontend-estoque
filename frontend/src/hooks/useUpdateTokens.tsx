import { useEffect } from "react";
import axios from "axios";


export function useUpdateTokens() {

    useEffect(() => {
        const ApiUrl = import.meta.env.VITE_API_URL

        const checkUpdate = async () => {
            try {
                await axios.get(`${ApiUrl}refreshtoken/`, {
                    withCredentials: true
                })
                
            } catch (error) {
                console.error(`Erro: ${error}`)
            }
        }

        const interval = setInterval(() => {
            checkUpdate()
        }, 60 * 3000)

        return () => clearInterval(interval)

    }, [])
}