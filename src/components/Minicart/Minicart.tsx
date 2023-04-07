import { useShoppingCart } from '../../context/ShoppingCartContext'
import MiniCartItem from './MiniCartItem/MiniCartItem';
import closeIcon from '../../assets/svgs/closeIcon.svg'
import { PRODUCTS } from '../../data/products'

import "./Minicart.scss"
import { useState } from 'react';

interface MiniCartProps {
    isOpen: boolean 
}

function Minicart({ isOpen }: MiniCartProps) {

    const { cartItems, closeCart } = useShoppingCart()

    return (
        <>  
            <div className={ isOpen ? "containerMinicart MenuDrawerShown" : "containerMinicart MenuDrawerHidden" }>

                <div> 
                    <div className="containerTitleMinicart" onClick={closeCart}> 
                        <img src={closeIcon}  className="closeIcon"/>

                        <span>Meu Carrinho</span>
                    </div>
                    <div className="containerMinicartItens">
                        {cartItems.map(item => (
                            <MiniCartItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>
                
                <div className="containerTotalCart">
                    <div className="totalCart">
                        Total:
                    </div>
                    <div className="valueTotalCart">
                        {
                            cartItems.reduce((total, cartItem) => {
                                const item = PRODUCTS.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0).toLocaleString(
                                "pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                }
                            )
                        }
                    </div>
                </div>

            </div>

            {isOpen && (
                <div
                    className="MenuDrawerOverlay"
                    onClick={closeCart}
                    aria-hidden="true"
                />
            )}
        </>
    )
}

export default Minicart