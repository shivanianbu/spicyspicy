import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/bars-solid.svg'
import Close from './icon/times-solid.svg'
import Cart from './icon/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Header() {
     const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    // const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        localStorage.removeItem('firstLogin')
        window.location.href = "/";
        // localStorage.clear()
        // setIsAdmin(false)
        // setIsLogged(false)
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Create Item</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    // const styleMenu = {
    //     left: menu ? 0 : "-100%"
    // }

    return (
         <header>

            <div className="menu" >
                <img src={Menu} alt="" width="30" />
             </div>

             <div className="logo">
                 <h1>
                     <Link to="/">{isAdmin ? 'Admin' : 'Spicy Corner'}</Link>
                 </h1>
             </div>
             <ul>
                 <li> <Link to="/">{isAdmin ? 'Items' : 'Items'}</Link> </li>

                 {isAdmin && adminRouter()}

            {
                isLogged ? loggedRouter() : <li><Link to="/login">Login/Register</Link></li>
            }
                 <li> <img src={Close} alt="" width="30" className="menu" /></li>
             </ul>

             
            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }

        {/* // 
        //    

        //     <ul style={styleMenu}>
        //         <li><Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link></li>

        //         {isAdmin && adminRouter()}

        //         {
        //             isLogged ? loggedRouter() : <li><Link to="/login">Login ✥ Register</Link></li>
        //         }

        //         <li onClick={() => setMenu(!menu)}>
        //            
        //         </li>

        //     </ul>

        //     {
        //         isAdmin ? '' 
        //         :<div className="cart-icon">
        //             <span>{cart.length}</span>
        //             <Link to="/cart">
        //                 <img src={Cart} alt="" width="30" />
        //             </Link>
        //         </div>
        //     } */}
            
        </header>
      
    )
}

export default Header
