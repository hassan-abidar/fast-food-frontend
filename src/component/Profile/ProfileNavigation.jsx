import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EventIcon from '@mui/icons-material/Event'
import LogoutIcon from '@mui/icons-material/Logout'
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useNavigate } from 'react-router-dom';



const menu = [
  {title:"Orders",icon:<ShoppingBagIcon/>},
  {title:"Favorites",icon:<FavoriteIcon/>},
  {title:"Addresses",icon:<HomeIcon/>},
  {title:"Payment",icon:<AccountBalanceWalletIcon/>},
  {title:"Notifications",icon:<NotificationsActiveIcon/>},
  {title:"Events",icon:<EventIcon/>},
  {title:"Logout",icon:<LogoutIcon/>,}
]
export const ProfileNavigation = (open,handleClose) => {
  const isSmallScreen = useMediaQuery("(max-width:1080)")
  const navigate = useNavigate();
  const handleNavigaton=(item)=>{
    navigate(`/my-profile/${item.title.toLowerCase()}`)
  }

  return (
    <div>
        <Drawer variant={isSmallScreen?"temporary":"permanent"} 
        onClose={handleClose} 
        anchor='left' 
        open={open} 
        sx={{zIndex:1}}>
            <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col
            justify-center text-xl gap-8 pt-16'>
              {menu.map((item,i)=><>
              <div onClick={()=>handleNavigaton(item)}
                className='px-5 flex items-center space-x-5 cursor-pointer'>
                {item.icon}
                <span>
                  {item.title}
                </span>
              </div>
              {i!==menu.length-1 && <Divider/>}
              </>)}

            </div>
        </Drawer>
    </div>
  )
}
