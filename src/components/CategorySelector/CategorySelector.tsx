import React, {useState, useEffect} from 'react'; 
import axios from "axios";

import iconTittle from '../../assets/svgs/iconTitle.svg'
import arrowGreen from '../../assets/svgs/arrowGreen.svg'

import "./CategorySelector.scss"

export default function CategorySelector( ) {

    const [ dataGames, setDataGames ] = useState([]);
    const [ category, setCategory ] = useState("shooter");
    const [openDrop, setOpenDrop] = useState(false);

    // console.log("category", category)

    // const [ teste, setTeste ] = useState("shooter");

    // console.log("teste", teste)


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

        console.log("options.params.category", options.params.category)

        axios.request(options).then(function (response) {

            setDataGames(response.data)

        }).catch(function (error) {

            console.error(error);

        });

    }, [category]);

    return (
        <section className="categoryCustom">
            <div className="containerCategoryCustom">
                <div className="containertitleCategoryCustom">
                    <img src={iconTittle} className="icon-title" alt="Icon title" />
                    <p className="titleCategoryCustom">Dicas de games</p> 

                    <div className="containerSelectCategoryCustom">
                        <div onClick={()=> setOpenDrop(!openDrop)} className="selectCategoryCustom">
                            <span>Selecione a categoria</span>
                            <img src={arrowGreen}/>
                        </div>

                        {openDrop && (
                            <div className="containerCategoryOptions">
                                <button onClick={() => {
                                    setCategory("pvp");
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
    
                                <a href={game.game_url}>
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