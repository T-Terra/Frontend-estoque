import { useState } from 'react'
import axios from 'axios'
import PartForm from '../components/FormAdd.tsx'

interface Product {
  id: number;
  name: string;
  code: string;
  description: string;
  amount: number;
}

function AddEstoque() {

  const [resProducts, setResProducts] = useState<Product>({
    "id": 0,
    "name": "",
    "code": "",
    "description": "",
    "amount": 0
  })
  const ApiUrl = import.meta.env.VITE_API_URL

    async function SendProducts(name: string, description: string, code: string, amount: string) {
      try {
        const response = await axios.post(`${ApiUrl}pecas/`, {
            "name": name,
            "description": description,
            "code": code,
            "amount": amount
        }, {
          withCredentials: true
        })

        setResProducts(response.data)

        return response
      } catch (error) {
        console.error('Erro ao Criar produto', error)
      }
    }

    function GetDataForm(formData: FormData): void {
        try {
            const name = formData.get('name') as string
            const code = formData.get('code') as string
            const description = formData.get('description') as string
            const amount = formData.get('amount') as string

            SendProducts(name, code, description, amount)
        } catch (error) {
            console.error(`Erro: ${error}`)
        }
    }

  return (
    <PartForm onSubmit={GetDataForm} resProducts={resProducts}/>
  )
}
  
export default AddEstoque