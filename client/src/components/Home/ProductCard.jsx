import React from 'react';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import FormatPrice from "../../Other/FormatPrice";

const ProductCard = ({ product }) => {
    const { addToCart, cartItems, removeFromCart, navigate } = useAppContext();

    return product && (
        <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white w-full h-full flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300">
            {/* Image */}
            <div onClick={() => { navigate(`/product/${product.category.toLowerCase()}/${product._id}`); scrollTo(0, 0) }}
                className="group cursor-pointer flex items-center justify-center px-2">
                <img
                    className="group-hover:scale-105 transition max-h-36 object-contain"
                    src={product.image[0]}
                    alt={product.name}
                />
            </div>

            {/* Product Info */}
            <div className="text-gray-500/60 text-sm mt-3 flex flex-col flex-1">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate">{product.name}</p>

                {/* Ratings */}
                <div className="flex items-center gap-0.5 my-1">
                    {Array(5).fill('').map((_, i) => (
                        <img key={i} className='md:w-3.5 w-3' src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt="" />
                    ))}
                    <p>(4)</p>
                </div>

                {/* Price + Add to Cart */}
                <div className="flex items-end justify-between mt-auto pt-3">
                    <p className="md:text-xl text-base font-medium text-primary">
                        <FormatPrice price={product.offerPrice} />{" "}
                        <span className="text-gray-500/60 md:text-sm text-xs line-through">
                            <FormatPrice price={product.price} />
                        </span>
                    </p>

                    {/* Cart Controls */}
                    <div
                        className="text-primary">
                        {!cartItems[product._id] ? (
                            <button
                                className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/30 md:w-[80px] w-[64px] h-[34px] rounded cursor-pointer"
                                onClick={() => addToCart(product._id)}
                            >
                                <img src={assets.cart_icon} alt="cart icon" />
                                <span className="text-sm">Add</span>
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/25 rounded select-none">
                                <button
                                    onClick={() => removeFromCart(product._id)}
                                    className="cursor-pointer text-md px-2 h-full"
                                >
                                    -
                                </button>
                                <span className="w-5 text-center">{cartItems[product._id]}</span>
                                <button
                                    onClick={() => addToCart(product._id)}
                                    className="cursor-pointer text-md px-2 h-full"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
