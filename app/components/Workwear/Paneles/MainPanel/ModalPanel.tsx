// src/components/ButtonCls.tsx
import React from 'react';
import {RootState} from '../../../../Store/store'
import { useDispatch, useSelector} from 'react-redux'
import { toggleModal } from '../../../../Store/Slice/ModalWindowSlice'

export const ModalPanel =() => {
     const selectId = useSelector((state: RootState) => state.modal.visibleID);
     const selectUserAll = useSelector((state: RootState) => state.users);
     console.log (selectUserAll)
      const selectedUsers = selectUserAll.find(user => user.id === selectId);
      console.log ( selectedUsers?.patronymic)
     const dispatch = useDispatch();
     const handleClickModal =()=> {
           dispatch(toggleModal(0))
     }

     return (
    <div >
        <h2>Лична карточка </h2>
        <h1>{selectId}</h1>
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