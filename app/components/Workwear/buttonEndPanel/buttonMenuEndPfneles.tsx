import React, {useEffect, useState} from "react"




export const ButtonsMenu = () =>{
    const [idActiv, setIdActiv] = useState(true);
    
    const selectBtn =(e)=> {
        setIdActiv( !idActiv);
        console.log (idActiv, e.target.id);
        
    }
    return (
        <div className="mainMenyBtn">
            <button id= "1" onClick={selectBtn} className={`btnMenu allBtn ${idActiv ? 'active' : ''}`}> Главный </button>
            <button id= "2" onClick={selectBtn} className="btnMenu allBtn"> Полный список </button>
            <button id= "3" onClick={selectBtn}  className="btnMenu allBtn"> Личная карточка </button>
            <button id= "4" onClick={selectBtn} className="btnMenu allBtn"> Остатки </button>
            <button id= "5" onClick={selectBtn} className="btnMenu allBtn"> Приход </button>
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