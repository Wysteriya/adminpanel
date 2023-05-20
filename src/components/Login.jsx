import { useEffect, useState } from "react";
import { Navbar } from "./utils/Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import {useCookies} from 'react-cookie'
const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['user']);
  const {private_key,public_key}=cookies;
  const notifySuccess = (message) => {
    return toast.success(`${message}`);
  };
  const notifyError = (message) => {
    return toast.error(`${message}`);
  };
  const handelsetCookie=()=>{
    console.log("cookies")
  }
  const [data, setData] = useState({
    user_name: "",
    password: "",
  });
  const handle = () => {
    setCookie('private_key', "3e96a3f3437253b213b64e8161180c473df1c19eae370c7dc7f4490ccc5317e882826aad14ea22a3d0dbfa56735ec7f5c6fba954e49e2d5872ac0318cba51e16", { path: '/' });
    setCookie('public_key', "82826aad14ea22a3d0dbfa56735ec7f5c6fba954e49e2d5872ac0318cba51e16", { path: '/' });
 };
 useEffect(()=>{
   handle();
 },[])

  const initial = { user_name: "", password: "", error: true };
  const [error, setError] = useState(initial);

  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setError((prev) => {
      return { ...prev, [e.target.id]: "" };
    });
    setData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const validateform = () => {
    if (data.user_name == "" && data.password == "") {
      return {
        user_name: "user field is empty",
        private_key: "password field is empty",
        error: true,
      };
    } else if (data.user_name == "") {
      return { user_name: "user field is empty", error: true };
    } else if (data.password == "" || data.password !== "password") {
      return { password: "invalid password", error: true };
    }
    return { error: false };
  };
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = validateform();
    if (validate.error) {
      setError(validate);
      return;
    }
    const baseUrl = "http://34.125.194.30:9090/baby_chain/public/login";
    await axios
      .post(baseUrl, {"public_key":public_key,"private_key":private_key})
      .then(async (response) => {
        console.log("response", response);
        notifySuccess(response.data.message);
        
        await sleep(3000).then(() => {
          navigate("/register_ins");
        });
      })
      .catch((error) => {
        console.log(error.response.data.error);
        notifyError(error.response.data.error);
      });
      
    console.log(data);
    // handle();

  };

  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <div class="bg-white min-h-screen flex items-center justify-center font-poppins p-4">
        <div className=" w-full md:w-4/5 bg-blue-500 p-10 flex rounded-lg shadow-xl ">
          <div class="w-full h-full">
            <form
              class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div class="mb-8">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  User name
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="user_name"
                  type="text"
                  placeholder="Enter username ..."
                  value={data.user_name}
                  onChange={handleChange}
                />
                <div className="text-sm text-red-500">{error.user_name}</div>
              </div>
              <div class="mb-8">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password"
                  value={data.password}
                  onChange={handleChange}
                />
                <div className="text-sm text-red-500">{error.password}</div>
              </div>

              <div class="flex">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
