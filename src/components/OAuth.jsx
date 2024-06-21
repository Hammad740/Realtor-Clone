import { FcGoogle } from 'react-icons/fc';

const OAuth = () => {
  return (
    <button className="flex items-center justify-center w-full gap-1 py-3 text-sm font-medium text-white uppercase transition duration-200 ease-in-out bg-red-700 rounded-md shadow-md px-7 hover:bg-red-800 hover:shadow-lg active:bg-red-900">
      <FcGoogle className="mr-2 text-2xl bg-white rounded-full" />
      Continue with Google
    </button>
  );
};
export default OAuth;
