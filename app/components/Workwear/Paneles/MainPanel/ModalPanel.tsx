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

     const [objArr, setValue] = useState(selectWorkswearAll);

     const selectedUserWworkswear = objArr.filter(workswear => workswear.idUser === selectId);

      useEffect(() => {
        setValue(selectWorkswearAll);
         // Метод reduce очень удобен для суммирования элементов массива
    const totalPrise = selectedUserWworkswear.reduce((sum, selected) => {
      // Убедимся, что значение является числом (или 0, если undefined/null)
      return sum + (selected.residual_prise || 0);
    }, 0); // Начинаем суммирование с 0  
    setResidualSumm(totalPrise); // Устанавливаем вычисленную сумму в стейт
  }, [selectWorkswearAll, selectedUserWworkswear]);
  const [residualSumm, setResidualSumm] = useState(0);
  


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
          <table className="user-table">
            <thead>
              <tr>
                <th>Вид СИЗ</th>
                <th>Дата выдачи</th>
                <th>Дата увольнения</th>
                <th>Стоимость</th>
                <th>Остаточная стоимость</th>
                <th>Размер</th>
                <th>Рост</th>
              </tr>
            </thead>
            <tbody>
              {selectedUserWworkswear.map((seltcted) => (
                <tr key={seltcted.id}>
                   <td>{ seltcted.typeWorkswear}</td>
                  <td> { seltcted.date_issue} </td>
                  <td>{ seltcted.date_dismissal}</td>
                  <td>{ seltcted.prise}</td>
                  <td>{seltcted.residual_prise}</td>
                  <td>{seltcted.size}</td>
                  <td>{seltcted.height}</td>
                  {/* setResidualSumm = residualSumm + {+seltcted.residual_prise} */}
                </tr>
              ))}
            </tbody>
          </table> 
        <button name="btnCls" className='allBtn btnMenu' onClick={handleClickModal}>Закрыть</button>
        <button name="btnCls" className='allBtn btnMenu'>Редактировать</button>
                  <div className="user-table titleFIO">
                    <p >Сумма остатка</p>
                    <div > {residualSumm} </div>
                  </div>
    </div>
    )
}