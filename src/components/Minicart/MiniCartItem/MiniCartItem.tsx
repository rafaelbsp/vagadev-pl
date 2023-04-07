import { useShoppingCart } from '../../../context/ShoppingCartContext'
import { PRODUCTS } from '../../../data/products'

import deleteIcon from '../../../assets/svgs/trash.svg'

import "./MiniCartItem.scss"

interface MiniItemCartProps {
  id: number
  quantity: number
}

function MinicartItem({ id, quantity }: MiniItemCartProps) {

  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  
  const item = PRODUCTS.find(i => i.id === id)

  if (item == null) return null

  return (
    <section className="containerMiniCartItem">

      <div className="miniCartItem"> 

        <img className="miniCartItemImage" src={item.productImage} />
        
        <div className="miniCartItemData">

          <div className="miniCartItemName">
            {item.productName}{" "}
          </div>

          <div className="miniCartItemPrice" >
            {item.price.toLocaleString(
              "pt-BR", {
                style: "currency",
                currency: "BRL",
              }
            )}
          </div>

          <div className="miniCartItemQuantity" >
              <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
                <div>
                  <span className="miniCartItemQuantityNumber">{quantity}</span>
                </div>
              <button onClick={() => increaseCartQuantity(item.id)}>+</button>
          </div>
              
        </div>
      </div>

      <button className="miniCartItemRemove" onClick={() => removeFromCart(item.id)}>
        <img src={deleteIcon}/>
      </button>

    </section>
  )
}

export default MinicartItem