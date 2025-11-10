import React from "react"



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