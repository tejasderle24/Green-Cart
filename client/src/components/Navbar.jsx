import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navbar } from '../assets/navbar/navbar.js'
import { Menu, Search, ShoppingCart } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const { user, setUser, showUserLogin, setShowUserLogin, navigate, searchQuery, setSearchQuery, getCartCount } = useAppContext();



    const logout = async () => {
        setUser(null);
        navigate('/')
    }

    useEffect(() => {
        if (searchQuery.length > 0) {
            navigate("/product")
        }
    }, [searchQuery]);

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to='/' onClick={() => setOpen(false)}>
                <img className="h-9" src={navbar.logo} alt="logo" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">

                {/* Nav Links */}
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/product'>All Product</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>

                {/* Search Bar */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input onChange={(e) => setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <Search className="w-5 h-5 opacity-90" />
                </div>

                {/* Cart Button */}
                <div className="relative cursor-pointer">
                    <ShoppingCart
                        className="h-5 opacity-80" />
                    <button
                        onClick={() => navigate("/cart")}
                        className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>


                {/* Auth Funcanality */}

                {!user ? (
                    <button
                        onClick={() => setShowUserLogin(true)}
                        className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                        Login
                    </button>)
                    :
                    (
                        <div className="relative group">
                            <img src={navbar.profile_icon} className="w-10" alt="Profile Icon" />
                            <ul
                                className="hidden group-hover:block absolute top-10 right-0 bg-white shadow-md rounded-md text-sm border-gray-200 w-30 z-40 p-2.5">
                                <li
                                    onClick={() => navigate("/my-order")}
                                    className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">My Order</li>
                                <li
                                    onClick={logout}
                                    className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">Logout</li>
                            </ul>
                        </div>

                    )}

            </div>

            {/* Start Mobile View */}

            <div className="flex items-center gap-6 sm:hidden">
                <div className="relative cursor-pointer">
                    <ShoppingCart className="h-5 opacity-80" />
                    <button
                        onClick={() => navigate("/cart")}
                        className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>

                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu">
                    {/* Menu Icon SVG */}
                    <Menu className="w-4 h-4" />
                </button>

            </div>



            {/* Mobile Menu */}
            {open && (
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                    <NavLink to='/' onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to='/product' onClick={() => setOpen(false)}>All Product</NavLink>
                    {user &&
                        <NavLink to='/my-order' onClick={() => setOpen(false)}>My Order</NavLink>
                    }
                    <NavLink to='/contact' onClick={() => setOpen(false)}>Contact Us</NavLink>

                    {!user ? (
                        <button
                            onClick={() => {
                                setOpen(false);
                                setShowUserLogin(true)
                            }}

                            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                            Login
                        </button>
                    ) : (
                        <button
                            onClick={logout}
                            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                            Logout
                        </button>
                    )}

                </div>
            )}

        </nav>
    )
}

export default Navbar;