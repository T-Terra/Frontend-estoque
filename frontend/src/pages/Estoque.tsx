import { useState, useEffect } from 'react'
import TableList from '../components/Table'
import axios from 'axios'

function Estoque() {

  const [products, setProducts] = useState([])
  const ApiUrl = import.meta.env.VITE_API_URL

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

  return (
    <TableList product={products}/>
  )
}
  
export default Estoque