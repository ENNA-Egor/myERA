import React from "react"

import myImage from '../../../assets/edit-button-svgrepo-com.svg';



export const ReferenceBook =() => {

    const buttonClisk = ()=> {
        console.log ('Привет')
    }

    return (
        <div>
            <h3>Справочники</h3>
            <input type="Text"></input>
            <span
                      className="clickable-surname"
                      onClick={() => buttonClisk()}
                    >
                 <img src={myImage}  className="imgButton allBtn"/>
                    </span>

        </div>
    )
}