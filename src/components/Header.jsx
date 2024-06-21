import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className="bg-white border-b-2 border-b-white shadow-md sticky top-0 z-10">
      <header className="flex justify-between items-center px-4 max-w-6xl mx-auto ">
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>
        <div>
          <ul className="flex items-center justify-between space-x-5 md:space-x-10 ">
            <li
              onClick={() => navigate('/')}
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/') && '!text-black !border-b-red-500'
              }`}
            >
              Home
            </li>
            <li
              onClick={() => navigate('/offers')}
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/offers') && '!text-black !border-b-red-500'
              }`}
            >
              Offers
            </li>
            <li
              onClick={() => navigate('/sign-in')}
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/sign-in') && '!text-black !border-b-red-500'
              }`}
            >
              Signin
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
