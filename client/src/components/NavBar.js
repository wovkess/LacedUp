import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from 'react-router-dom'
import cart from '../assets/cart.png'
import WebFont from 'webfontloader';
import '../css/style.css'


WebFont.load({
    google: {
        families: ['Ubuntu:300,400,500']
    }
});


const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar
            id="main_navbar"
            font-family="'Ubuntu', sans-serif"
        >
            <Container>
                <NavLink id="main_navlink" to={SHOP_ROUTE}>LacedUp.</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            id="admin_btn"
                            variant={"outline-none"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Admin
                        </Button>
                        <Button
                            id="exit_btn"
                            variant={"outline-none"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Exit
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            id="auth_btn"
                            variant={"outline-none"}
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Authorization
                        </Button>
                        <Button
                            className='cart_btn'
                            variant={"outline-none"}
                            onClick={() => navigate(BASKET_ROUTE)}><img id='cart_icon' src={cart} alt='cart_button'
                            />
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar >

    );
});

export default NavBar;
