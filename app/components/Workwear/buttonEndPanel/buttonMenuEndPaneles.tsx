import React from "react"

import {MainPanel} from '../Paneles/MainPanel/MainPanel'
import {PersonalCard} from '../Paneles/MainPanel/PersonalCard'
import {FulListPanel} from '../Paneles/FulListPanel'
import {CreateNewUser} from '../Paneles/CreateNewUser'
import {Leftovers} from '../Paneles/Leftovers'
import {Coming} from '../Paneles/Coming'
import {WorkwearAdd} from '../Paneles/MainPanel/WorkwearAdd'
import {ReferenceBook} from '../Paneles/ReferenceBook'
import {selectStatusViev} from '../../../Store/Slice/PanelVievSlise'
import {RootState} from '../../../Store/store'
import { useSelector, useDispatch } from 'react-redux'

// import { toggleModal } from '../../../../Store/Slice/ModalWindowSlice'



export const BodyContent = () =>{

     const isModalOpen = useSelector((state: RootState) => state.modal.isVisible);
      const modalClasses = `modalMain ${isModalOpen ? 'modalMainActive' : ''}`;
     const workwearOpen = useSelector((state: RootState) => state.modal.workwearVisible);
     const workwearClasses = `workwearMain ${workwearOpen ? 'workwearMainActive' : ''}`;
     const panelViev = useSelector((state: RootState) => state.tabsViev);
    //  console.log(panelViev)

    const dispatch = useDispatch();
    
    const selectBtn =(e)=> {
        dispatch(selectStatusViev( e.target.id))
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
                    {/* {panelViev.map((item)=> (
                        // @ts-ignore
                        <button key= {item.id} id= {item.id} onClick={selectBtn} className={item.statusTab? "btnMenu allBtn active": 'btnMenu allBtn'}>{item.name} </button>
                    ))} */}
                     <button id= "1" onClick={selectBtn} className={"btnMenu allBtn active"}> Полный список </button>
                     <button id= "2" onClick={selectBtn} className="btnMenu allBtn"> Поиск </button>
                     <button id= "3" onClick={selectBtn}  className="btnMenu allBtn"> Новая карточка </button>
                     <button id= "4" onClick={selectBtn} className="btnMenu allBtn"> Остатки </button>
                     <button id= "5" onClick={selectBtn} className="btnMenu allBtn"> Приход </button>
                     <button id= "6" onClick={selectBtn} className="btnMenu allBtn"> Справочники </button>
                </div>
            </div>
            <div className="mainWindow">
                <div className="panelesMeny">
                    <div id= "1" className="panels activePanel">
                        <FulListPanel/>
                    </div>
                    <div id= "2" className=" panels "> 
                        <MainPanel/>          
                    </div>
                    <div id="modalMain" className={modalClasses}>
                        <PersonalCard/>
                    </div>
                    <div id="workwearMain" className={workwearClasses}>
                        <WorkwearAdd/>
                    </div>
                    <div id= "3" className="panels">
                        <CreateNewUser/>
                    </div>
                    <div id= "4" className="panels">
                        <Leftovers/>
                    </div>
                    <div id= "5" className="panels">
                        <Coming/>
                    </div>
                    <div id= "6" className="panels">
                        <ReferenceBook/>
                    </div>
                </div>
            </div>
        </div>

    )
}

