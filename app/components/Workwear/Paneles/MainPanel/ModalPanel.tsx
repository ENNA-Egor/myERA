// src/components/ButtonCls.tsx
import React from 'react';
// import {RootState} from '../../../../Store/store'
import { useDispatch} from 'react-redux'
import { toggleModal } from '../../../../Store/Slice/ModalWindowSlice'

export const ModalPanel =() => {
     const dispatch = useDispatch();
     const handleClickModal =()=> {
           dispatch(toggleModal())
     }

     return (
    <div >
        <h2>Лична карточка </h2>
        <button name="btnCls" onClick={handleClickModal}>Закрыть</button>
    </div>
    )
}