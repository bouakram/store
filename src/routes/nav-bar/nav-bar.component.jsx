import './nav-bar.styles.scss'
import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as ShopLogo } from '../../assets/retail-shop-icon.svg'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CardIcon from '../../components/card-icon/card-icon.component'
import CardDropDown from '../../components/card-drop-down/card-drop-down.component'
import { cardContext } from '../../contexts/card-display.context'

function NavBar() {
    const { currentUser } = useContext(UserContext)
    const { display } = useContext(cardContext)
    return (
        <Fragment>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                    <ShopLogo className='logo-svg' />
                </Link>
                <div className='nav-links-container'>
                    <Link to='/' className='nav-link'>HOME</Link>
                    <Link to='/shop' className='nav-link'>SHOP</Link>
                    {
                        currentUser ?
                            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                            :
                            <Link to='/sign-in' className='nav-link'>SIGN IN</Link>
                    }
                    <CardIcon />
                </div>
                {display && <CardDropDown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavBar