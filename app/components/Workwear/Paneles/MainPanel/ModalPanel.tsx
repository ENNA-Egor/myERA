// src/components/ButtonCls.tsx
import React from 'react';
import {RootState} from '../../../../Store/store'
import { useDispatch, useSelector} from 'react-redux'
import { toggleModal } from '../../../../Store/Slice/ModalWindowSlice'

export const ModalPanel =() => {
     const selectId = useSelector((state: RootState) => state.modal.visibleID);
     const selectUserAll = useSelector((state: RootState) => state.users);
     const selectWorkswearAll = useSelector((state: RootState) => state.workswears);
    //  console.log (selectWorkswearAll)
      const selectedUser = selectUserAll.find(user => user.id === selectId);
      const selectedUserWworkswear = selectWorkswearAll.filter(workswear => workswear.idUser === selectId);
      console.log (selectedUserWworkswear)
     const dispatch = useDispatch();
     const handleClickModal =()=> {
           dispatch(toggleModal(0))
     }

     const extractedData = selectedUserWworkswear.map(item => ({
    typeWorkswear: item.typeWorkswear,
    date_issue: item.date_issue
}));


  console.log (extractedData)
  console.log (extractedData[0])


  const allUniqueKeys = Object.keys(selectWorkswearAll[0]);

console.log(allUniqueKeys);

     return (
    <div >
        <h2>Лична карточка </h2>
        <div className='titleFIO'>
          <h2>{selectedUser?.surname }</h2>
          <h2>{selectedUser?.first_name }</h2>
          <h2>{selectedUser?.patronymic }</h2>
        </div>
          <table className="user-table">
            <thead>
              <tr>
                {/* <th>ID</th>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th> */}
                <th>Профессия</th>
              </tr>
            </thead>
            <tbody>
                <tr key={ selectedUser?.id}>
                  {/* <td>{ selectedUsers?.id}</td>
                  <td>
                      { selectedUsers?.surname}
                  </td>
                  <td>{ selectedUsers?.first_name}</td>
                  <td>{ selectedUsers?.patronymic}</td> */}
                  <td>{ selectedUser?.profession}</td>
                </tr>
            </tbody>
          </table> 
        <button name="btnCls" className='allBtn btnMenu' onClick={handleClickModal}>Закрыть</button>
        <button name="btnCls" className='allBtn btnMenu'>Редактировать</button>
    </div>
    )
}