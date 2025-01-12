import { NavLink } from "react-router-dom";
import { assets } from '../assets/assets';


function MobileNavbar({ setVisible }) {
  return (
     <div className="flex flex-col text-gray-600 bg-white">
        <div
           onClick={() => setVisible(false)}
           className="flex items-center gap-4 p-3 cursor-pointer"
        >
           <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="dropdown icon"
           />
           <p>Back</p>
        </div>

        <NavLink
           onClick={() => setVisible(false)}
           className="py-2 pl-6 border"
           to="/"
        >
           HOME
        </NavLink>
        <NavLink
           onClick={() => setVisible(false)}
           className="py-2 pl-6 border"
           to="/collection"
        >
           COLLECTION
        </NavLink>
        <NavLink
           onClick={() => setVisible(false)}
           className="py-2 pl-6 border"
           to="/about"
        >
           ABOUT
        </NavLink>
        <NavLink
           onClick={() => setVisible(false)}
           className="py-2 pl-6 border"
           to="/contact"
        >
           CONTACT
        </NavLink>
     </div>
  );
}


export default MobileNavbar;