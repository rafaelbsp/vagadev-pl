import React, {useState, useEffect} from 'react'; 
import axios from "axios";

import iconTittle from '../../assets/svgs/iconTitle.svg'
import arrowGreen from '../../assets/svgs/arrowGreen.svg'

import "./CategorySelector.scss"

export default function CategorySelector( ) {

    const [ dataGames, setDataGames ] = useState([]);
    const [ category, setCategory ] = useState("PVP");
    const [openDrop, setOpenDrop] = useState(false);

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {category: `${category}`},
            headers: {
                'X-RapidAPI-Key': '0c6f94a3b9msh37ab2dae7538d53p1d1a29jsn5ef5c21ee465',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {

            setDataGames(response.data)

        }).catch(function (error) {

            console.error(error);

        });

    }, [category]);

    return (
        <section className="categoryCustom">
            <div className="containerCategoryCustom">
                <div className="subContainerCategoryCustom">

                    <div className="containertitleCategoryCustom">
                        <img src={iconTittle} className="icon-title" alt="Icon title" />
                        <p className="titleCategoryCustom">Dicas de games</p> 
                    </div>

                    <div className="containerSelectCategoryCustom">
                        <div onClick={()=> setOpenDrop(!openDrop)} className="selectCategoryCustom">
                            <p>Selecione a categoria <span>({category})</span></p>
                            <img src={arrowGreen}/>
                        </div>

                        {openDrop && (
                            <div className="containerCategoryOptions">
                                <button onClick={() => {
                                    setCategory("PVP");
                                    setOpenDrop(false)
                                }} className="categoryOptions">
                                    PVP
                                </button>

                                <button onClick={() => {
                                    setCategory("shooter");
                                    setOpenDrop(false)
                                }} className="categoryOptions">
                                    Shooter
                                </button>

                                <button onClick={() => {
                                    setCategory("mmorpg");
                                    setOpenDrop(false)
                                }} className="categoryOptions">
                                    Mmorpg
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="containerCardCategoryCustom">
                    { dataGames?.slice(4, 8).map((game: any, index: any) =>(
                        <div className="subContainerCardCategoryCustom" key={index}>
                            
                            <div className="cardCategoryCustom">

                                <div className="flagCardCategory">
                                    <span>{ index + 1 }</span>
                                </div>
    
                                <a href={game.game_url} target="_blank">
                                    <img src={game.thumbnail} className="imageCardCategory" />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};