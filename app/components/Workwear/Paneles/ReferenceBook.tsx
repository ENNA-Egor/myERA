import React from "react"

import myImage from '../../../assets/edit-button-svgrepo-com.svg';


export const ReferenceBook =() => {

    return (
        <div>
            <h3>Справочники</h3>
            <input type="Text"></input>
            <button>
                 <img src={myImage}  className="imgButton"/>
            </button>
        </div>
    )
}