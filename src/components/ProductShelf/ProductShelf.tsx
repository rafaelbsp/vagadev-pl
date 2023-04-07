
import { useMediaQuery } from 'react-responsive' 
import iconTittle from '../../assets/svgs/iconTitle.svg'
import { PRODUCTS } from '../../data/products';

import "./ProductShelf.scss"
import Product from './Product/Product';


export default function ProductShelf() {
    
    const isTabletScreen = useMediaQuery({ query: '(max-width: 825px)' })

    return (

        <section className="shelf-product">
          {isTabletScreen ? (

            <div className="containerShelf">
                <div className="containerTitleShelf">
                    <img src={iconTittle} className="icon-title" alt="Icon title" />
                    <p className="titleShelf">Produtos em destaque</p> 
                </div>

                <div className="containerCardCategoryCustom">

                    { PRODUCTS?.map((card: any, index: any) =>(
                        <Product {...card}/>
                    ))}
                </div>
            </div>

          ) : (
            
            <div className="containerShelf">
                <div className="containerTitleShelf">
                    <img src={iconTittle} className="icon-title" alt="Icon title" />
                    <p className="titleShelf">Produtos em destaque</p> 
                </div>

                <div className="containerCardCategoryCustom">

                    { PRODUCTS?.map((card: any, index: any) =>(
                        <Product {...card}/>
                    ))}
                </div>
            </div>

          )}
        </section>
    )

};