import React, {useEffect, useState} from "react"

const [idActiv, setIdActiv] = useState('');

const selectBtn =()=> {
    
}



export const ButtonsMenu = () =>{
    return (
        <div className="mainMenyBtn">
            <button className="btnMenu allBtn active"> Главный </button>
            <button className="btnMenu allBtn"> Полный список </button>
            <button className="btnMenu allBtn"> Личная карточка </button>
            <button className="btnMenu allBtn"> Остатки </button>
            <button className="btnMenu allBtn"> Приход </button>
        </div>

    )
}

export const PanelesMenu = () =>{
    return (
        <div className="panelesMeny">
            <div className=" panels activePanel"> Главный </div>
            <div className="panels"> Полный список </div>
            <div className="panels"> Личная карточка </div>
            <div className="panels"> Остатки </div>
            <div className="panels"> Приход </div>
        </div>

    )
}