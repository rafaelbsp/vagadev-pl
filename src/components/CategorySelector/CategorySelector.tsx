import React, {useState, useEffect} from 'react';
import { useMediaQuery } from 'react-responsive' 
import axios from "axios";

import "./CategorySelector.scss"

export default function CategorySelector( ) {

    const isTabletScreen = useMediaQuery({ query: '(max-width: 825px)' })

    const [ dataGames, setDataGames ] = useState([]);

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {category: 'shooter'},
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

    }, []);

    return (
        <section className="categoryCustom">
          {isTabletScreen ? (

            <div className="containerCategoryCustom">
                <div className="titleCategoryCustom">
                    <p>Dicas de games</p> 
                </div>

                <div className="containerCardCategoryCustom">
                    { dataGames?.slice(0, 6).map((game: any, index: React.Key | null | undefined)=>(
                        <div className="subContainerCardCategoryCustom" key={index}>
                            
                            <div className="cardCategoryCustom">
                                <img src={game.thumbnail} className="imageCardCategory" />
                            </div>

                        </div>
                    ))}
                </div>
            </div>

          ) : (
            <div className="containerCategoryCustom">
                <div className="titleCategoryCustom">
                    <p>Dicas de games</p> 
                </div>

                <div className="containerCardCategoryCustom">
                    { dataGames?.slice(0, 4).map((game: any, index: React.Key | null | undefined)=>(
                        <div className="subContainerCardCategoryCustom" key={index}>
                            
                            <div className="cardCategoryCustom">
                                <img src={game.thumbnail} className="imageCardCategory" />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
          )}
        </section>
    )
};