import { Edit } from "lucide-react";

type Product = {
    id: number;
    name: string;
    code: string;
    description: string;
    amount: number;
}

type ListProducts = {
    product: Product[]
}

function TableList({ product, onEdit }: ListProducts) {
    return (
      <div className="h-screen w-screen bg-gray-400 flex justify-center">
        <div className="w-[800px]">
          <h2 className="text-3xl text-gray-100 font-bold text-center m-3">Listagem de Estoque</h2>
          <table className="w-[800px] border-gray-400 md:border-separate shadow-2xs">
            <thead>
              <tr>
                <th className="bg-gray-300 text-gray-800 text-left p-3">Nome do Produto</th>
                <th className="bg-gray-300 text-gray-800 text-left p-3">Código do Produto</th>
                <th className="bg-gray-300 text-gray-800 text-left p-3">Descrição</th>
                <th className="bg-gray-300 text-gray-800 text-left p-3">Qt</th>
              </tr>
            </thead>
            <tbody>
              {product.map((product) => (
                  <tr key={product.id} className="border-b bg-gray-300 text-gray-800 hover:bg-gray-500 hover:text-gray-100">
                    <td className="p-3">{product.name}</td>
                    <td className="p-3">{product.code}</td>
                    <td className="p-3">{product.description}</td>
                    <td className="p-3">{product.amount}</td>
                    <td className="p-3">
                      <button
                        onClick={() => onEdit(product, product.id)}
                        className="text-gray-700 hover:text-gray-900"
                      >
                        <Edit size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default TableList