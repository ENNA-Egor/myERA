import React from "react"

import myImage from '../../../assets/edit-button-svgrepo-com.svg';


export const ReferenceBook =() => {

    return (
        <div>
            <h3>Справочники</h3>
            <input type="Text"></input>
            <span
                      className="clickable-surname"
                      
                    >
                 <img src={myImage}  className="imgButton allBtn"/>
                    </span>
            {/* <button className="allBtn">
            </button> */}
        </div>
    )
}