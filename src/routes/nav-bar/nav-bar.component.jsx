import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as ShopLogo } from '../../assets/retail-shop-icon.svg'
import './nav-bar.styles.scss'

function NavBar() {
    return (
        <Fragment>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                    <ShopLogo className='logo-svg' />
                </Link>
                <div className='nav-links-container'>
                    <Link to='/' className='nav-link'>HOME</Link>
                    <Link to='/shop' className='nav-link'>SHOP</Link>
                    <Link to='/sign-in' className='nav-link'>SIGN IN</Link>
                    <Link to='/cart' className='nav-link'>CART</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavBar