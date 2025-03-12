import { Edit, Trash2 } from "lucide-react";

type Product = {
    id: number;
    name: string;
    code: string;
    description: string;
    amount: number;
}
type OnEdit = (productList: Product, id: number) => void;
type OnDelete = (id: number) => void;

type ListProducts = {
  product: Product[]
  onEdit: OnEdit
  onDelete: OnDelete
}


function TableList({ product, onEdit, onDelete }: ListProducts) {
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
              {product.map((prod) => (
                  <tr key={prod.id} className="border-b bg-gray-300 text-gray-800 hover:bg-gray-500 hover:text-gray-100">
                    <td className="p-3">{prod.name}</td>
                    <td className="p-3">{prod.code}</td>
                    <td className="p-3">{prod.description}</td>
                    <td className="p-3">{prod.amount}</td>
                    <td>
                      <button
                        onClick={() => onEdit(prod, prod.id)}
                        className="hover:text-blue-400 p-4"
                      >
                        <Edit size={20} />
                      </button>
                    </td>
                    <td>
                      <button
                          onClick={() => onDelete(prod.id)}
                          className="hover:text-red-400 p-4"
                        >
                          <Trash2 size={20} />
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