import React from "react"

import {MainPanel} from '../Paneles/mainPanel'
import {FulListPanel} from '../Paneles/FulListPanel'
import {PersonalCard} from '../Paneles/PersonalCard'
import {Leftovers} from '../Paneles/Leftovers'
import {Coming} from '../Paneles/Coming'



export const BodyContent = () =>{
    
    const selectBtn =(e)=> {
        const tab_elements = document.querySelectorAll('.btnMenu');
        const contents = document.querySelectorAll('.panels');

        tab_elements.forEach((element)=> {
            e.target.id === element.id ? (element.classList.add("active")) : (element.classList.remove("active"))
        })  
        contents.forEach((content_element)=> {
            e.target.id === content_element.id ? (content_element.classList.add("activePanel")) : (content_element.classList.remove("activePanel"))
        })  
    }
    return (
        <div className="body">
            <div className="levtMenu">
                <div className="mainMenyBtn">
                    <button id= "1" onClick={selectBtn} className={"btnMenu allBtn active"}> Главный </button>
                    <button id= "2" onClick={selectBtn} className="btnMenu allBtn"> Полный список </button>
                    <button id= "3" onClick={selectBtn}  className="btnMenu allBtn"> Личная карточка </button>
                    <button id= "4" onClick={selectBtn} className="btnMenu allBtn"> Остатки </button>
                    <button id= "5" onClick={selectBtn} className="btnMenu allBtn"> Приход </button>
                </div>
            </div>
            <div className="mainWindow">
                <div className="panelesMeny">
                    <div id= "1" className=" panels activePanel"> 
                        <MainPanel/> 
                    </div>
                    <div id= "2" className="panels">
                        <FulListPanel/>
                    </div>
                    <div id= "3" className="panels">
                        <PersonalCard/>
                    </div>
                    <div id= "4" className="panels">
                        <Leftovers/>
                    </div>
                    <div id= "5" className="panels">
                        <Coming/>
                    </div>
                </div>
            </div>
        </div>

    )
}

