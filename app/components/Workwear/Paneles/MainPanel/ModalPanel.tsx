// src/components/ButtonCls.tsx
import React, {useState, useEffect} from 'react';
import {RootState} from '../../../../Store/store'
import { useDispatch, useSelector} from 'react-redux'
import { toggleModal } from '../../../../Store/Slice/ModalWindowSlice'

export const ModalPanel =() => {
     const selectId = useSelector((state: RootState) => state.modal.visibleID);
     const selectUserAll = useSelector((state: RootState) => state.users);
     const selectWorkswearAll = useSelector((state: RootState) => state.workswears);
      const selectedUser = selectUserAll.find(user => user.id === selectId);
     const dispatch = useDispatch();
     const handleClickModal =()=> {
           dispatch(toggleModal(0))
     }



      useEffect(() => {
        setValue(selectWorkswearAll);
      }, [selectWorkswearAll]);
       const [objArr, setValue] = useState(selectWorkswearAll);
       
       const selectedUserWworkswear = objArr.filter(workswear => workswear.idUser === selectId);
    const result =selectedUserWworkswear.map((obj) => {
      return <p key={obj.id}>
         {obj.typeWorkswear} {obj.date_issue} {obj.date_dismissal} {obj.prise} {obj.residual_prise} {obj.size} {obj.height}
      </p>;
   });






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
          <div>
            {result}
          </div>
        <button name="btnCls" className='allBtn btnMenu' onClick={handleClickModal}>Закрыть</button>
        <button name="btnCls" className='allBtn btnMenu'>Редактировать</button>
    </div>
    )
}