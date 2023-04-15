const Login = () => {
    return (
        <div class="bg-green-200 min-h-screen flex items-center">
            <div class="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
                <form action="">

                    <div class="flex items-center mb-5">
                        <label for="name" class="w-30 inline-block text-right mr-4 text-gray-500">Public Key</label>
                        <input name="name" id="name" type="text"  class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                    </div>

                    <div class="flex items-center mb-10">
                        <label for="twitter" class="w-30 inline-block text-right mr-4 text-gray-500">Private Key</label>
                        <input type="text" name="twitter" id="twitter"  class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                    </div>
                    <div class="text-right">
                        <button class="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;