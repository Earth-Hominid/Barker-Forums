import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo-light.png';

const Navigaton = () => {
  return (
    <nav className="h-10 whitespace-nowrap flex flex-row items-center sticky top-0 z-50 bg-white">
      <div>
        <Link to="/barker">
          <img
            className=" cursor-pointer min-w-24 w-24"
            src={Logo}
            alt="barker logo"
          />
        </Link>
      </div>
      <div className="flex justify-end w-full">
        {[
          ['Already a member?', '/log-in'],
          ['Sign up', '/sign-up'],
        ].map(([title, url]) => (
          <a
            href={url}
            className="rounded-lg px-2.5 py-2 text-stone-700 font-medium hover:bg-stone-300 text-xs hover:text-stone-900"
          >
            {title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigaton;
