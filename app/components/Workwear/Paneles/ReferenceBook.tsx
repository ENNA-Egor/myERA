import React from "react"

import myImage from '../../../assets/edit-button-svgrepo-com.svg';
// import {EditIcon} from '../Icons/icons'
// 


export const ReferenceBook =() => {

    const buttonClisk = ()=> {
        console.log ('Привет')
    }

    return (
        <div>
            <h3>Справочники</h3>
            <input type="Text"></input>
            <button
                      className="clickable-surname"
                      onClick={() => buttonClisk()}
                    >
                 <img src={myImage}  className="imgButton allBtn"/>
                    </button>
            {/* <EditIcon size={25} fill= 'rgb(51, 51, 51)' color= 'rgb(51, 51, 51)'/> */}
        </div>
    )
}