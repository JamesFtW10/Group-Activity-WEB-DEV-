import KevsShoesLogo from "../../../../assets/ItemsImages/kevs-logo-merged.png";
import { Heart, ShoppingCart, UserRound, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className=" h-10 bg-black text-white sticky top-0 z-50 shadow-lg">
            <nav className="bg-black  max-w-7xl mx-auto px-6 py-4">
                <div className="flex h-10 items-center justify-between">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <img className="h-16 w-30" src={KevsShoesLogo} alt="Kev's Shoes" />
             
                    </NavLink>

                    {/* Center Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink 
                            to="/" 
                            end
                            className={({ isActive }) => 
                                `text-sm font-medium hover:text-gray-300 transition-colors ${
                                    isActive ? 'text-white border-b-2 border-white pb-1' : 'text-gray-400'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/items"
                            className={({ isActive }) => 
                                `text-sm font-medium hover:text-gray-300 transition-colors ${
                                    isActive ? 'text-white border-b-2 border-white pb-1' : 'text-gray-400'
                                }`
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink 
                            to="/contact"
                            className={({ isActive }) => 
                                `text-sm font-medium hover:text-gray-300 transition-colors ${
                                    isActive ? 'text-white border-b-2 border-white pb-1' : 'text-gray-400'
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center gap-5">
                        <Search className="cursor-pointer hover:text-gray-300 transition-colors w-5 h-5" />
                        <Heart className="cursor-pointer hover:text-gray-300 transition-colors w-5 h-5" />
                        <div className="relative">
                            <ShoppingCart className="cursor-pointer hover:text-gray-300 transition-colors w-5 h-5" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                0
                            </span>
                        </div>
                        <UserRound className="cursor-pointer hover:text-gray-300 transition-colors w-5 h-5" />
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden flex justify-center gap-6 mt-4 pt-4 border-t border-gray-800">
                    <NavLink 
                        to="/" 
                        end
                        className={({ isActive }) => 
                            `text-sm font-medium ${isActive ? 'text-white' : 'text-gray-400'}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/items"
                        className={({ isActive }) => 
                            `text-sm font-medium ${isActive ? 'text-white' : 'text-gray-400'}`
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink 
                        to="/contact"
                        className={({ isActive }) => 
                            `text-sm font-medium ${isActive ? 'text-white' : 'text-gray-400'}`
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;