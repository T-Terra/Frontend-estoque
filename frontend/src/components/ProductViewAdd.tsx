interface Product {
    id: number;
    name: string;
    code: string;
    description: string;
    amount: number;
}

type ListProducts = {
    resProd: Product
}

function ProductView({ resProd }: ListProducts) { 
    if (resProd === undefined) return null

    return (
        <div className="w-[500px] max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                Última Peça Cadastrada
            </h3>
            <p><strong>ID:</strong> {resProd.id}</p>
            <p><strong>Nome:</strong> {resProd.name}</p>
            <p><strong>Código:</strong> {resProd.code}</p>
            <p><strong>Descrição:</strong> {resProd.description}</p>
            <p><strong>Quantidade:</strong> {resProd.amount}</p>
        </div>
    )
  }
    
  export default ProductView