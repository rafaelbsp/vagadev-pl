import { useShoppingCart } from '../../context/ShoppingCartContext'
import MiniCartItem from './MiniCartItem/MiniCartItem';
import closeIcon from '../../assets/svgs/closeIcon.svg'

import "./Minicart.scss"
import { useState } from 'react';

interface MiniCartProps {
    openMinicart: boolean //
}

function Minicart({ openMinicart }: MiniCartProps) {

    const { cartItems } = useShoppingCart()

    const [close, setClose] = useState(openMinicart);

    return (
        <>  
                        {/* MEU ESTADO AQUI */}
            <div className={ openMinicart ? "containerMinicart MenuDrawerShown" : "containerMinicart MenuDrawerHidden" }>

                <div> 
                    <div className="containerTitleMinicart" onClick={() => { setClose(!openMinicart) }}> 
                        <img src={closeIcon}  className="closeIcon"/>

                        <span>Meu Carrinho</span>
                    </div>
                    <div className="containerMinicartItens">
                        {cartItems.map(item => (
                            <MiniCartItem key={item.id} {...item}  />
                        ))}
                    </div>
                </div>
                
                <div className="containerTotalCart">
                    <div className="totalCart">
                        Total:
                    </div>
                    <div className="valueTotalCart">
                        200000
                    </div>
                </div>

            </div>

            {/* {showDrawer && (
                <div
                    className={styles.MenuDrawerOverlay}
                    onClick={() => setShowDrawer(false)}
                    aria-hidden="true"
                />
            )} */}
        </>
    )
}

export default Minicart