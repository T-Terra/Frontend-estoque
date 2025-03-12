type Auth = {
    AuthFunc: (formData: FormData) => void
}

function Form({ AuthFunc }: Auth) {
    return (
        <div className="h-screen w-screen bg-gray-400 flex justify-center">
            <div className="w-[500px]">
            <form action={AuthFunc} className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg mt-16">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
                
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Enter your name"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                </div>
                
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="Enter your password"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                </div>

                <div className="flex justify-center">
                    <button 
                        type="submit" 
                        className="w-full py-3 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Login
                    </button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Form