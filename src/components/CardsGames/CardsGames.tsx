import bannerSekiro from '../../assets/imgs/sekiro_banner.png'
import bannerZelda from '../../assets/imgs/zelda_banner.png'

import "./CardsGames.scss"

function CardsGames() {
  
    return (
        <div className="cardsContainer">
            <div className="cardsPositionContainer">
                <div className="cardSubContainer">
                    <img className="cardImage" src={bannerZelda}/>

                    <div className="cardContainerBar">
                        <p className="cardBarName"> The Legend of Zelda - Breath of th wild </p>
                        <div className="cardBarLine"></div>
                    </div>
                </div>

                <div className="cardSubContainer">
                    <img className="cardImage" src={bannerSekiro}/>

                    <div className="cardContainerBar"> 
                        <p className="cardBarName"> SEKIRO - Shadows die twice</p>
                        <div className="cardBarLine"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CardsGames