import React from 'react';
import './card.css';
import './filtredcards';
import cardsData from '../ItemListContainer/cardsdata';
import Gorra from  '../carrito/assets/gorrauno.png'
import Gorrados from  '../carrito/assets/gorrados.png'
import Gorratres from  '../carrito/assets/gorratres.png'
import Gorracuatro from  '../carrito/assets/gorracuatro.png'
import Gorracinco from  '../carrito/assets/gorracinco.png'
import Ropauno from  '../carrito/assets/ropauno.png'
import Ropados from  '../carrito/assets/ropados.png'
import Ropatres from  '../carrito/assets/ropatres.png'






   

const Cards = () => {
    return (
        <div className="card-container">
            {cardsData.map(card => (
                    <div className="card" key={Cards.id}>
                        <img src={Gorra} alt={"ss"} />
                        <div>
                            <h1>{"Gorra New era"}</h1>
                            <p>{"Gorra New York Yankees MLB"}</p>
                            <h2>{"$ 60.500"}</h2> 
                        </div>
                    </div>
                ))}
           
                <div className="card" key={Cards.id}>
                    <img src={Gorrados} alt="Otro título" />
                    <div>
                    <h1>{"Gorra New era"}</h1>
                    <p>{"Gorra Milwaukee Bucks NBA"}</p>
                    <h2>{"$ 58.000"}</h2>
                    </div>
                </div>
              
                <div className="card" key={Cards.id}>
                    <img src={Gorratres} alt="Otro título" />
                    <div>
                    <h1>{"Gorra New era"}</h1>
                    <p>{"Gorra New England Patriots NFL"}</p>
                    <h2>{"$ 60.000"}</h2>
                    </div>
                </div>
              
                <div className="card" key={Cards.id}>
                    <img src={Gorracuatro} alt="Otro título" />
                    <div>
                    <h1>{"Gorra New era"}</h1>
                    <p>{"Gorra Washington Commanders NFL"}</p>
                    <h2>{"$ 40.000"}</h2>
                    </div>
                </div>
                <div className="card" key={Cards.id}>
                    <img src={Gorracinco} alt="Otro título" />
                    <div>
                    <h1>{"Gorra New era"}</h1>
                    <p>{"Gorra Miami Heat NBA"}</p>
                    <h2>{"$ 50.000"}</h2>
                    </div>
                </div>
                <div className="card" key={Cards.id}>
                    <img src={Ropauno} alt="Otro título" />
                    <div>
                    <h1>{"Buzo Nike NBA"}</h1>
                    <p>{"Buzo Golden State Warriors NBA"}</p>
                    <h2>{"$ 165.000"}</h2>
                    </div>
                </div>
                <div className="card" key={Cards.id}>
                    <img src={Ropados} alt="Otro título" />
                    <div>
                    <h1>{"Campera New Era"}</h1>
                    <p>{"Campera New York Yankees"}</p>
                   <h2>{"$ 180.000"}</h2>
                    </div>
                </div>
                <div className="card" key={Cards.id}>
                    <img src={Ropatres} alt="Otro título" />
                    <div>
                    <h1>{"Chaqueta New Era"}</h1>
                  <p>{"Chaqueta Bomber New Era"}</p>
                 <h2>{"$ 185.000"}</h2>
                    </div>
                </div>
            </div>
            
        );
    }







export default Cards;





















/*
    const Card = ({ filteredCards }) => {
    return (
        <div className="card-container">
             {filteredCards.map(card => (
        <div className="card" key={Card.id}>
            <img src={Gorra} alt={title} />
            <div>
                <h1>{"Gorra New era"}</h1>
                <p>{"Gorra New York Yankees MLB"}</p>
                <h2>{"$ 60.500"}</h2>
            </div>
        </div>
             
        <div className="card">
            <img src={Gorrados} alt={title} />
            <div>
                <h1>{"Gorra New era"}</h1>
                <p>{"Gorra Milwaukee Bucks NBA"}</p>
                <h2>{"$ 58.000"}</h2>
            </div>
        </div>
        <div className="card">
            <img src={Gorratres} alt={title} />
            <div>
                <h1>{"Gorra New era"}</h1>
                <p>{"Gorra New England Patriots NFL"}</p>
                <h2>{"$ 60.000"}</h2>
            </div>
        </div>
        <div className="card">
            <img src={Gorracuatro} alt={title} />
            <div>
                <h1>{"Gorra New era"}</h1>
                <p>{"Gorra Washington Commanders NFL"}</p>
                <h2>{"$ 40.000"}</h2>
            </div>
        </div>
        <div className="card">
            <img src={Gorracinco} alt={title} />
            <div>
                <h1>{"Gorra New era"}</h1>
                <p>{"Gorra Miami Heat NBA"}</p>
                <h2>{"$ 50.000"}</h2>
            </div>
        </div>
        <div className="card">
            <img src={Ropauno} alt={title} />
            <div>
                <h1>{"Buzo Nike NBA"}</h1>
                <p>{"Buzo Golden State Warriors NBA"}</p>
                <h2>{"$ 165.000"}</h2>
            </div>
        </div>
        <div className="card">
            <img src={Ropados} alt={title} />
            <div>
                <h1>{"Campera New Era"}</h1>
                <p>{"Campera New York Yankees"}</p>
                <h2>{"$ 180.000"}</h2>
            </div>
        </div>
        <div className="card">
            <img src={Ropatres} alt={title} />
            <div>
                <h1>{"Chaqueta New Era"}</h1>
                <p>{"Chaqueta Bomber New Era"}</p>
                <h2>{"$ 185.000"}</h2>
            </div>
        </div>
    </div>
        
              ) );
}}
*/

