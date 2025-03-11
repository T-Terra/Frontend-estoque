import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

function EditProduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;
  const ApiUrl = import.meta.env.VITE_API_URL

  const [editedProduct, setEditedProduct] = useState(product);

  // Função que Manupula o formulário pegando o name e value do input

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Função que envia o produto editado para o backend

  const handleSave = async () => {
    const response = await axios.put(`${ApiUrl}pecas/${editedProduct.id}/`, {
        "name": editedProduct.name,
        "description": editedProduct.description,
        "code": editedProduct.code,
        "amount": editedProduct.amount
    }, {
        withCredentials: true
    })

    navigate("/list");
    return response
  };

  if (!product) {
    return <div className="h-screen flex justify-center items-center bg-gray-400"><p className="font-bold size-80 text-2xl text-gray-900">Produto não encontrado.</p></div>
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-400">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Editar Produto
        </h2>

        {/* ID (Desativado) */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">ID</label>
          <input name="id" type="text" value={editedProduct.id} disabled className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-600" />
        </div>

        {/* Nome */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Nome</label>
          <input name="name" type="text" value={editedProduct.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400" />
        </div>

        {/* Código */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Código</label>
          <input name="code" type="text" value={editedProduct.code} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400" />
        </div>

        {/* Descrição */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Descrição</label>
          <textarea name="description" value={editedProduct.description} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400" />
        </div>

        {/* Quantidade */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Quantidade</label>
          <input name="amount" type="number" min="1" value={editedProduct.amount} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400" />
        </div>

        {/* Botões */}
        <div className="flex justify-between">
          <button onClick={() => navigate("/list")} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700">
            Cancelar
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
