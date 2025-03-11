import { useState, useEffect } from 'react'
import TableList from '../components/Table'
import { useNavigate } from "react-router"
import axios from 'axios'

function Estoque() {

  const [products, setProducts] = useState([])
  const ApiUrl = import.meta.env.VITE_API_URL
  const navigate = useNavigate()

  useEffect(() => {
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

  const handlerEdit = (Product, id) => {
    navigate(`/edit/${id}`, { state: Product })
  }

  return (
    <TableList product={products} onEdit={handlerEdit}/>
  )
}
  
export default Estoque