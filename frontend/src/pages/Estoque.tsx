import { useState, useEffect } from 'react'
import TableList from '../components/Table'
import { useNavigate } from "react-router"
import axios from 'axios'


type Product = {
  id: number;
  name: string;
  code: string;
  description: string;
  amount: number;
}

function Estoque() {

  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const ApiUrl = import.meta.env.VITE_API_URL

  useEffect(() => {
    const ApiUrl = import.meta.env.VITE_API_URL
    async function GetProducts() {
      try {
        const response = await axios.get(`${ApiUrl}pecas/`, {
          withCredentials: true
        })
        setProducts(response.data)
      } catch (error) {
        console.error('Erro ao buscar produtos', error)
      }
    }

    GetProducts()
  }, [])

  const handlerEdit = async (Prod: Product, id: number) => {
    await navigate(`/edit/${id}`, { state: Prod })
  }

  const handlerDelete = async (id: number) => {
    try {
      const response = await axios.delete(`${ApiUrl}pecas/${id}/`, {
        withCredentials: true
      })

      setProducts(products.filter((idFilter: Product) => (idFilter.id !== id)))

      return response.status
    } catch (error) {
      console.error('Erro ao apagar produto', error)
    }
  }

  return (
    <TableList product={products} onEdit={handlerEdit} onDelete={handlerDelete} />
  )
}
  
export default Estoque