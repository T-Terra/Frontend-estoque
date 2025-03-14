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
        <div className="">
          <h2 className="text-2xl text-gray-100 sm:text-3xl font-bold text-center m-3">Listagem de Estoque</h2>
          <table className="w-[200px] sm:w-[800px] border-gray-400 md:border-separate shadow-2xs">
            <thead>
              <tr>
                <th className="bg-gray-300 text-gray-800 text-left p-2 sm:p-3 text-[13px] sm:text-[15px]">Nome do Produto</th>
                <th className="bg-gray-300 text-gray-800 text-left p-2 sm:p-3 text-[13px] sm:text-[15px]">Código do Produto</th>
                <th className="bg-gray-300 text-gray-800 text-left p-2 sm:p-3 text-[13px] sm:text-[15px]">Descrição</th>
                <th className="bg-gray-300 text-gray-800 text-left p-2 sm:p-3 text-[13px] sm:text-[15px]">Qt</th>
              </tr>
            </thead>
            <tbody>
              {product.map((prod) => (
                  <tr key={prod.id} className="border-b bg-gray-300 text-gray-800 hover:bg-gray-500 hover:text-gray-100">
                    <td className="p-2 sm:p-3 text-[13px] sm:text-[15px]">{prod.name}</td>
                    <td className="p-2 sm:p-3 text-[13px] sm:text-[15px]">{prod.code}</td>
                    <td className="p-2 sm:p-3 text-[13px] sm:text-[15px]">{prod.description}</td>
                    <td className="p-2 sm:p-3 text-[13px] sm:text-[15px]">{prod.amount}</td>
                    <td>
                      <button
                        onClick={() => onEdit(prod, prod.id)}
                        className="hover:text-blue-400 p-2 sm:p-4"
                      >
                        <Edit className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </td>
                    <td>
                      <button
                          onClick={() => onDelete(prod.id)}
                          className="hover:text-red-400 p-2 sm:p-4"
                        >
                          <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
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