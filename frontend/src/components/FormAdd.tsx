import ProductView from '../components/ProductViewAdd.tsx'

function PartForm({ onSubmit, resProducts }) {
    return (
        <div className="h-screen w-screen bg-gray-400 flex justify-center">
            <div className="w-[500px]">
                <form 
                    action={onSubmit} 
                    className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg mt-16"
                >
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Cadastro de Peça
                    </h2>
                    
                    {/* Nome do Produto */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Nome do Produto
                        </label>
                        <input 
                            name="name" 
                            type="text" 
                            placeholder="Digite o nome da peça"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>

                    {/* Código do Produto */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Código do Produto
                        </label>
                        <input 
                            name="code" 
                            type="text" 
                            placeholder="Digite o código da peça"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>

                    {/* Descrição */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Descrição
                        </label>
                        <textarea 
                            name="description" 
                            placeholder="Digite uma descrição"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        ></textarea>
                    </div>

                    {/* Quantidade */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Quantidade
                        </label>
                        <input 
                            name="amount" 
                            type="number" 
                            min="1"
                            placeholder="Digite a quantidade"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button 
                            type="submit" 
                            className="w-full py-3 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Cadastrar Peça
                        </button>
                    </div>
                </form>
                <ProductView resProd={resProducts}/>
            </div>
        </div>
    );
}

export default PartForm;
