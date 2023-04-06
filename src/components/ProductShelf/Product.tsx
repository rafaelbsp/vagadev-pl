import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'


type StoreItemProps = {
    id: number
    productName: string
    price: number
    productImage: string
}

function Product({ id, productName, price, productImage }: StoreItemProps) {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart()

    const quantity = getItemQuantity(id)

    return (
        <div className="shelfCard">
            <div className="containerImage">
                <img src={productImage} className="imageCardCategory" />
            </div>
            <div className="containerInfoCard">
                <span className="cardName">{productName}</span>

                <span className="cardPrice">
                    {price.toLocaleString(
                        "pt-BR",
                        {
                            style: "currency",
                            currency: "BRL",
                        }
                    )}
                </span>
                <div className="containerButton">

                    {quantity === 0 ? (
                        <button className="cardButton" onClick={() => increaseCartQuantity(id)}>
                            <span>COMPRAR</span>
                        </button>
                        ) : (
                        <button className="cardButton" onClick={() => increaseCartQuantity(id)}>
                            <span>COMPRAR</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Product