import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
   const { currency } = useContext(ShopContext);

   return (
      <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
         <div className="overflow-hidden h-[12rem] flex items-center justify-center">
            <img
               className="object-contain h-full transition hover:scale-110 ease-in-out"
               src={image[0]}
               alt={name}
            />
         </div>

         <p className="pt-3 pb-1 text-sm">{name}</p>
         <p className="text-sm font-medium">
            {currency}
            {price}
         </p>
      </Link>
   );
};

export default ProductItem;
