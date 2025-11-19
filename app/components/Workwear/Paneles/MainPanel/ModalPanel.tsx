// src/components/ButtonCls.tsx
import React from 'react';
import {RootState} from '../../../../Store/store'
import { useDispatch, useSelector} from 'react-redux'
import { toggleModal } from '../../../../Store/Slice/ModalWindowSlice'

export const ModalPanel =() => {
     const selectId = useSelector((state: RootState) => state.modal.visibleID);
     const selectUserAll = useSelector((state: RootState) => state.users);
      const selectedUsers = selectUserAll.find(user => user.id === selectId);
     const dispatch = useDispatch();
     const handleClickModal =()=> {
           dispatch(toggleModal(0))
     }


     return (
    <div >
        <h2>Лична карточка </h2>
        <div className='titleFIO'>
          <h2>{selectedUsers?.surname }</h2>
          <h2>{selectedUsers?.first_name }</h2>
        </div>
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th>
                <th>Профессия</th>
              </tr>
            </thead>
            <tbody>
                <tr key={ selectedUsers?.id}>
                  <td>{ selectedUsers?.id}</td>
                  <td>
                      { selectedUsers?.surname}
                  </td>
                  <td>{ selectedUsers?.first_name}</td>
                  <td>{ selectedUsers?.patronymic}</td>
                  <td>{ selectedUsers?.profession}</td>
                </tr>
            </tbody>
          </table> 
        <button name="btnCls" onClick={handleClickModal}>Закрыть</button>
    </div>
    )
}