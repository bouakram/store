// import './nav-bar.styles.jsx'
import React, { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as ShopLogo } from '../../assets/retail-shop-icon.svg'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CardIcon from '../../components/card-icon/card-icon.component'
import CardDropDown from '../../components/card-drop-down/card-drop-down.component'
import { NavigationComponent, LogoContainer, NavLinks, NavLink } from './nav-bar.styles.jsx'
import { cardContext } from '../../contexts/card.context.jsx'

function NavBar() {
    const { currentUser } = useContext(UserContext)
    const { display } = useContext(cardContext)
    return (
        <Fragment>
            <NavigationComponent >
                <LogoContainer to='/' >
                    <ShopLogo className='logo-svg' />
                </LogoContainer>
                <NavLinks >
                    <NavLink to='/' >HOME</NavLink>
                    <NavLink to='/shop' >SHOP</NavLink>
                    {
                        currentUser ?
                            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                            :
                            <NavLink to='/sign-in' >SIGN IN</NavLink>
                    }
                    <CardIcon />
                </NavLinks>
                {display && <CardDropDown />}
            </NavigationComponent>
            <Outlet />
        </Fragment>
    )
}

export default NavBar