import { Link, } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

const Navbar = () => {
   const [visible, setVisible] = useState(false);
   const {
      setShowSearch,
      getCartCount,
      navigate,
      token,
      setToken,
      setCartItems,
   } = useContext(ShopContext);

   const logout = () => {
      navigate('/login');
      localStorage.removeItem('token');
      setToken('');
      setCartItems({});
   };

   return (
      <div className="flex items-center justify-between py-5 font-medium tw-border tw-border-slate-200 sticky top-0 z-50 bg-white overflow-x-hidden w-full">
         <Link to="/">
            <img src={assets.logo} alt="" className="w-32" />
         </Link>

         <DesktopNavbar />

         <div className="flex items-center gap-6 ">
            <img
               onClick={() => setShowSearch(true)}
               src={assets.search_icon}
               alt=""
               className="w-5 cursor-pointer"
            />

            <div className="group relative">
               <img
                  onClick={() => (token ? null : navigate('/login'))}
                  className="w-5 cursor-pointer"
                  src={assets.profile_icon}
                  alt=""
               />

               {/* Dropdown menu */}
               {token && (
                  <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                     <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                        <p
                           onClick={() => navigate('/orders')}
                           className="cursor-pointer hover:text-black"
                        >
                           Orders
                        </p>
                        <p
                           onClick={logout}
                           className="cursor-pointer hover:text-black"
                        >
                           Logout
                        </p>
                     </div>
                  </div>
               )}
            </div>

            <Link to="/cart" className="relative">
               <img src={assets.cart_icon} alt="" className="w-5 min-w-5 mr-3" />
               <p className="absolute right-[0.5rem] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                  {getCartCount()}
               </p>
            </Link>

            <img
               onClick={() => setVisible(prev => !prev)}
               src={assets.menu_icon}
               alt=""
               className="w-5 cursor-pointer sm:hidden"
            />
         </div>

         <div
            className={`absolute top-[4rem] bottom-0  bg-white transition-all ${visible ? 'w-full right-0' : 'w-0 -right-[100%] '}`}
         >
            <MobileNavbar setVisible={setVisible} />
         </div>
      </div>
   ); 
};

export default Navbar;



