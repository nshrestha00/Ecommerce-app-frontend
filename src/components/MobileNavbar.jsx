import { NavLink } from "react-router-dom";
import { assets } from '../assets/assets';

function MobileNavbar({ setVisible }) {
  return (
     <div className="flex flex-col text-gray-600 bg-white h-full">
        <div
           onClick={() => setVisible(false)}
           className="flex items-center justify-between p-4 border-b cursor-pointer"
        >
           <p className="font-medium">Menu</p>
           <img
              className="h-4"
              src={assets.dropdown_icon}
              alt="close icon"
           />
        </div>

        <div className="flex flex-col">
          <NavLink
             onClick={() => setVisible(false)}
             className={({isActive}) => `py-3 px-6 border-b ${isActive ? 'font-bold' : ''}`}
             to="/"
          >
             HOME
          </NavLink>
          <NavLink
             onClick={() => setVisible(false)}
             className={({isActive}) => `py-3 px-6 border-b ${isActive ? 'font-bold' : ''}`}
             to="/collection"
          >
             COLLECTION
          </NavLink>
          <NavLink
             onClick={() => setVisible(false)}
             className={({isActive}) => `py-3 px-6 border-b ${isActive ? 'font-bold' : ''}`}
             to="/about"
          >
             ABOUT
          </NavLink>
          <NavLink
             onClick={() => setVisible(false)}
             className={({isActive}) => `py-3 px-6 border-b ${isActive ? 'font-bold' : ''}`}
             to="/contact"
          >
             CONTACT
          </NavLink>
        </div>
     </div>
  );
}

export default MobileNavbar;