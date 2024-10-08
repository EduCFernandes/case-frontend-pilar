import { Link } from 'react-router-dom';
import logo from '@/assets/logo.svg';

function Header() {
  return (
    <div
      data-testid="test-header"
      className="h-[65px] px-10 bg-slate-800 fixed z-10 top-0 flex items-center w-screen text-white
      "
    >
      <div className="container flex items-center justify-between">
        <Link to="/" data-testid="test-header-logo">
          <div className="flex">
            <img src={logo} alt="logo" className="h-4 w-auto" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
