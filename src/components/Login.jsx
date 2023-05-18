const Login = () => {
  return (
    <div class="bg-white min-h-screen flex items-center justify-center px-64 bg-[url('./wave.svg)] font-poppins">
      <div className="text-[1.5rem] font-semibold cursor-pointer fixed tracking-wide top-[0.75rem] left-[2rem]">
        INSUREGO
        <div className="text-gray-500 text-sm font-thin">Team wysteria</div>
      </div>
      <div className="w-full bg-blue-500 p-10 flex rounded-lg shadow-xl">
        <div class="w-full h-full">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-8">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Public key
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="public_key"
                type="text"
                placeholder="public key"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Private key
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="private_key"
                type="private_key"
                placeholder="private key"
              />
            </div>
            <div class="flex">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Log In
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
