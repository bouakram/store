// import './nav-bar.styles.jsx'
import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as ShopLogo } from '../../assets/retail-shop-icon.svg'
// import { UserContext } from '../../contexts/user.context'
// import { signOutUser } from '../../utils/firebase/firebase.utils'
import CardIcon from '../../components/card-icon/card-icon.component'
import CardDropDown from '../../components/card-drop-down/card-drop-down.component'
import { NavigationComponent, LogoContainer, NavLinks, NavLink } from './nav-bar.styles.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsCartOpen } from '../../store/cart/cart.selector.js'
import { signOutStart } from '../../store/user/user.action.js'
import { selectCurrentUser } from '../../store/user/user.selector'
// import { cardContext } from '../../contexts/card.context.jsx'

function NavBar() {
    // const { currentUser } = useContext(UserContext)
    // const { display } = useContext(cardContext)
    const dispatch = useDispatch()
    const display = useSelector(selectIsCartOpen)

    const currentUser = useSelector(selectCurrentUser)
    const signOutUser = () => {
        dispatch(signOutStart())
    }
    return (
        <Fragment>
            <NavigationComponent >
                <LogoContainer to='/' >
                    <ShopLogo className='logo-svg' />
                </LogoContainer>
                <NavLinks >
                    {/* <NavLink to='/' >HOME</NavLink> */}
                    <NavLink to='/shop' >SHOP</NavLink>
                    {
                        currentUser ?
                            <NavLink to={''} as='span' onClick={signOutUser}>SIGN OUT</NavLink>
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