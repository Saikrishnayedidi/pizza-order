import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/UserName';


function Header() {
  return (
    <header className="flex items-center justify-between   bg-black text-white shadow-md shadow-slate-100 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
         Pizza Orders 
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
