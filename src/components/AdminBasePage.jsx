import { Navbar } from "./utils/Navbar";

const AdminBasePage = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full h-screen bg-white flex flex-wrap justify-center items-center font-poppins">
      
      <div className="h-4/5 w-4/5 grid grid-cols-1 md:grid-cols-2">
        <div className="h-full w-full col-span-1 grid items-center">
          <img
            src="https://iili.io/Hvw2XV4.pnghttps://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg "
            width={400}
            className="m-auto"
          ></img>
        </div>
        <div className="h-full w-full bg-blue-300 col-span-1 flex justify-center items-center p-4">
          <div className="flex flex-col items-center justify-center bg-blue-500 gap-4 w-full h-4/5 text-white rounded-lg">
          <div class="text-lg">
            <a
              href="/register_ins"
              class="rounded-lg border-none bg-blue-400  px-6 py-2 text-center text-inherit placeholder-slate-200  outline-none backdrop-blur-md"
            >
              Register Insurance{" "}
            </a>
          </div>

          <div class="text-lg">
            <a
              href="/buy_ins"
              class="rounded-lg border-none bg-blue-400  px-6 py-2 text-center text-inherit placeholder-slate-200  outline-none backdrop-blur-md"
            >
              Buy Insurance{" "}
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminBasePage;
