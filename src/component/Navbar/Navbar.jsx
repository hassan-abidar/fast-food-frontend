import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';

export const Navbar = () => {
    const { auth, cart } = useSelector(store => store)
    const navigate = useNavigate();
    
    const handleAvatarClick = () => {
        if (auth.user?.role === "CUSTOMER") {
            navigate("/my-profile")
        } else {
            navigate("/admin/restaurants")
        }
    }
    
    return (
        <div className='px-5 z-50 py-[.8rem] bg-[#1D5926] lg:px-20 flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
                <li onClick={() => navigate("/")} className='logo font-bold text-gray-300 text-4xl text-left'>
                    KRISP
                </li>
            </div>
            <div className='flex items-center space-x-2 lg:space-x-10'>
            <div>
                    <IconButton onClick={()=>navigate("/")}>
                        <HomeIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>
                <div>
                    {auth.user ? (
                        <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: "#1D5926" }}>
                            {auth.user.fullName[0].toUpperCase()}
                        </Avatar>
                    ) : (
                        <IconButton onClick={() => navigate("/account/login")}>
                            <Person />
                        </IconButton>
                    )}
                </div>
                <div>
                    <IconButton onClick={() => navigate("/cart")}>
                        <Badge color='secondary' badgeContent={cart.cart?.items.length}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
