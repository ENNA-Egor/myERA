import React, {useEffect, useState} from "react"




export const ButtonsMenu = () =>{
    
    const [idActiv, setIdActiv] = useState(1);
    const selectBtn =(e)=> {
        setIdActiv(e.target.id);
        // console.log (idActiv, e.target.id);
        const tab_elements = document.querySelectorAll('.btnMenu');
        const contents = document.querySelectorAll('.panels');
        tab_elements.forEach((element)=> {
            // console.log(element.id)
            // console.log(e.target.id)
            e.target.id === element.id ? (element.classList.add("active")) : (element.classList.remove("active"))
        })  
        contents.forEach((content_element)=> {
            console.log(content_element.id)
            console.log(e.target.id)
            e.target.id === content_element.id ? (content_element.classList.add("activePanel")) : (content_element.classList.remove("activePanel"))
        })  
        console.log (idActiv);
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
                    <div id= "1" className=" panels activePanel"> Главный </div>
                    <div id= "1" className="panels"> Полный список </div>
                    <div id= "1" className="panels"> Личная карточка </div>
                    <div id= "1" className="panels"> Остатки </div>
                    <div id= "1" className="panels"> Приход </div>
                </div>
            </div>
        </div>

    )
}

// export const PanelesMenu = () =>{
//     return (
//         <div className="panelesMeny">
//             <div className=" panels activePanel"> Главный </div>
//             <div className="panels"> Полный список </div>
//             <div className="panels"> Личная карточка </div>
//             <div className="panels"> Остатки </div>
//             <div className="panels"> Приход </div>
//         </div>

//     )
// }