import React, { useState } from 'react'

import n1logo from '../../assets/svgs/Logo_N1.svg'
import iconBurguerDesktop from '../../assets/svgs/icon_hamburguer.svg'
import iconCart from '../../assets/svgs/shopping-bag-solid.svg'
import iconContato from '../../assets/svgs/paper-plane.svg'
import iconBusca from '../../assets/svgs/search-solid.svg'

import { useMediaQuery } from 'react-responsive' 

import { useShoppingCart } from '../../context/ShoppingCartContext'

import "./Navbar.scss"
import Minicart from '../Minicart/Minicart'

const Navbar = () => {

    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' })

    const { cartQuantity, openCart } = useShoppingCart()

    return (
        <section className="navbar">
          {isMobileScreen ? (
            <nav className="nav-container">
                <div className="nav-subContainer">
                    <img src={iconBurguerDesktop} className="icon-burguer" alt="Icon burguer" />

                    <a href='/' >
                        <img src={n1logo} className="logo-n1" alt="N1 logo" />
                    </a>
                </div>

                <div className="nav-subContainer">
                    <a className="nav-link" href='/contato' >
                        <img src={iconContato} className="icon-contato" alt="Icon contato" />
                    </a>

                    <div className="nav-search">
                        <img src={iconBusca} className="icon-busca" alt="Icon Busca" />
                    </div>

                    <button className="miniCart-button" onClick={openCart}>
                        <img src={iconCart} className="icon-cart" alt="Icon cart" />

                        {cartQuantity > 0 && (
                            <span>{cartQuantity}</span> 
                        )}
                    </button>
                </div>
            </nav>
          ) : (
            <nav className="nav-container">
                <div className="nav-subContainer">
                    <img src={iconBurguerDesktop} className="icon-burguer" alt="Icon burguer" />

                    <a href='/' >
                        <img src={n1logo} className="logo-n1" alt="N1 logo" />
                    </a>
                </div>

                <div className="nav-subContainer">
                    <a className="nav-link" href='/contato' >
                        <img src={iconContato} className="icon-contato" alt="Icon contato" />
                        <span>Contato</span>
                    </a>

                    <div className="nav-search">
                        <img src={iconBusca} className="icon-busca" alt="Icon Busca" />
                        <span>Buscar</span>
                    </div>

                    <button className="miniCart-button" onClick={openCart}>
                        <img src={iconCart} className="icon-cart" alt="Icon cart" />

                        {cartQuantity > 0 && (
                            <span>{cartQuantity}</span> 
                        )}
                    </button>
                    
                </div>

                
            </nav>
          )}
        </section>
    )
}

export default Navbar