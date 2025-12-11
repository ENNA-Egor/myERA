import React, {useState} from "react"

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



export const BodyContent = () =>{

     const isModalOpen = useSelector((state: RootState) => state.modal.isVisible);
      const modalClasses = `modalMain ${isModalOpen ? 'modalMainActive' : ''}`;
     const workwearOpen = useSelector((state: RootState) => state.modal.workwearVisible);
     const workwearClasses = `workwearMain ${workwearOpen ? 'workwearMainActive' : ''}`;
     const panelViev = useSelector((state: RootState) => state.tabsViev);
    //  console.log(panelViev)

    const [aktivePanel, setAktivePanel] = useState('1')

    
    const panelsObj = {
        '1' :FulListPanel,
        '2' :MainPanel,
        '3' :CreateNewUser,
        '4' :Leftovers,
        '5' :Coming,
        '6' :ReferenceBook,
    }
    
    const ActiveComponent = panelsObj[aktivePanel];

    const dispatch = useDispatch();
    
    const selectBtn =(e,)=> {
        dispatch(selectStatusViev( e.target.id))
        setAktivePanel( e.target.id)
    }


    return (
        <div className="body">
            <div className="levtMenu">
                <div className="mainMenyBtn">
                    {panelViev.map((item)=> (
                        // @ts-ignore
                        <button key= {item.id} id= {item.id} onClick={selectBtn} className={item.statusTab? "btnMenu allBtn active": 'btnMenu allBtn'}>{item.name} </button>
                    ))}
                </div>
            </div>
            <div className="mainWindow">
                <div className="panelesMeny">
                <div id= {aktivePanel} className="panels">
                        <ActiveComponent />
                    </div>
                    <div id="modalMain" className={modalClasses}>
                        <PersonalCard/>
                    </div>
                    <div id="workwearMain" className={workwearClasses}>
                        <WorkwearAdd/>
                    </div>
                </div>
            </div>
        </div>

    )
}

