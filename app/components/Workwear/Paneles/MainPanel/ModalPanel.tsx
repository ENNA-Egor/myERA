// src/components/ButtonCls.tsx
import React from 'react';
import {RootState} from '../../../../Store/store'
import { useDispatch, useSelector} from 'react-redux'
import { toggleModal } from '../../../../Store/Slice/ModalWindowSlice'

export const ModalPanel =() => {
     const selectId = useSelector((state: RootState) => state.modal.visibleID)
     const dispatch = useDispatch();
     const handleClickModal =()=> {
           dispatch(toggleModal(0))
     }

     return (
    <div >
        <h2>Лична карточка </h2>
        <h1>{selectId}</h1>
        <button name="btnCls" onClick={handleClickModal}>Закрыть</button>
    </div>
    )
}