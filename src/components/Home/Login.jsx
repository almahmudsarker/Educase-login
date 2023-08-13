import { Link } from "react-router-dom";
import { FcHome } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center mt-28">
        <div className="flex flex-col max-w-md p-2 rounded-md sm:p-10 bg-gray-100 text-gray-900 border-2">
          <div className="mb-8 mt-96">
            <h1 className="my-3 w-40 text-lg font-bold">Welcome to PopX</h1>
            <p className="w-60 text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="bg-violet-600 w-full rounded-md py-3 text-white mb-3"
            >
              Create Account
            </button>
            <button
              type="submit"
              className="bg-violet-300 w-full rounded-md py-3 text-black"
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
      <div className="join flex justify-center items-center">
        <FcHome className="text-xl" />
        <button className="join-item btn bg-transparent border-none">«</button>
        <button className="bg-transparent join-item btn border-none">
          1 of 4
        </button>
        <button className="border-none bg-transparent join-item btn">»</button>
      </div>
    </div>
  );
};

export default Login;
