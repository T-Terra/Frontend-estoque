import { useState, useEffect } from 'react'
import TableList from '../components/Table'
import axios from 'axios'

function Estoque() {

  const [products, setProduts] = useState([])
  const token = ''
  const ApiUrl = import.meta.env.VITE_API_URL

  useEffect(() => {
    async function GetProducts() {
      try {
        const response = await axios.get(`${ApiUrl}pecas/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        setProduts(response.data)
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