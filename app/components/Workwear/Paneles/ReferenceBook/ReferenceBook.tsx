import React from "react"

// import myImage from '../../../assets/edit-button-svgrepo-com.svg';
import {Heights} from '../ReferenceBook/ReferenceModal/Heights'
import {Prices} from '../ReferenceBook/ReferenceModal/Prices'
import {Sizes} from '../ReferenceBook/ReferenceModal/Sizes'
import {TypesWorkswears} from '../ReferenceBook/ReferenceModal/TypesWorkswears'
import {WearingPeriods} from '../ReferenceBook/ReferenceModal/WearingPeriods'

import { EditIcon } from '../../Icons/icons'


 const modalsObj = {
        '1': TypesWorkswears,
        '2': Prices,
        '3': WearingPeriods,
        '4': Sizes,
        '5': Heights,
    }


export const ReferenceBook = () => {

    const buttonClisk = () => {
        console.log('Привет')
    }

    return (
        <div>
            <h3>Справочники</h3>
            <input type="Text"  autoFocus>
            </input>
            <button
                className="allBtn btnMenu editMenu"
                onClick={() => buttonClisk()}
            >
                <EditIcon size={25} fill={'aqua'} />
            </button>
            <TypesWorkswears/>
            <Prices/>
            <WearingPeriods/>
            <Sizes/>
            <Heights/>
        </div>
    )
}