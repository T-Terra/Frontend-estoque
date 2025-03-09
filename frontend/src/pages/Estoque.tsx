import TableList from '../components/Table'

function Estoque() {

  const products = [
    { id: 1, name: "Óleo de Motor", code: "P001", description: "Óleo sintético 5W-30", quantity: 10 },
    { id: 2, name: "Filtro de Ar", code: "P002", description: "Filtro de ar para motores 1.6", quantity: 15 },
    { id: 3, name: "Pneu 175/65 R14", code: "P003", description: "Pneu para carros pequenos", quantity: 8 },
    { id: 4, name: "Bateria 60Ah", code: "P004", description: "Bateria automotiva 12V", quantity: 5 },
    { id: 4, name: "Bateria 60Ah", code: "P004", description: "Bateria automotiva 12V", quantity: 5 },
    { id: 4, name: "Bateria 60Ah", code: "P004", description: "Bateria automotiva 12V", quantity: 5 },
    { id: 4, name: "Bateria 60Ah", code: "P004", description: "Bateria automotiva 12V", quantity: 5 },
    { id: 4, name: "Bateria 60Ah", code: "P004", description: "Bateria automotiva 12V", quantity: 5 },
    { id: 4, name: "Bateria 60Ah", code: "P004", description: "Bateria automotiva 12V", quantity: 5 },
    { id: 4, name: "Bateria 60Ah", code: "P004", description: "Bateria automotiva 12V", quantity: 5 },
    { id: 4, name: "Bateria 60Ah", code: "P004", description: "Bateria automotiva 12V", quantity: 5 },
    { id: 4, name: "Bateria 60Ah", code: "P004", description: "Bateria automotiva 12V", quantity: 5 },
    { id: 4, name: "Bateria 60Ah", code: "P004", description: "Bateria automotiva 12V", quantity: 5 },
    { id: 4, name: "Bateria 60Ah", code: "P004", description: "Bateria automotiva 12V", quantity: 5 },
  ]

  return (
    <TableList product={products}/>
  )
}
  
export default Estoque