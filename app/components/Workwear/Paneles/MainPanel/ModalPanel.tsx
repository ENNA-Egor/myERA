// src/components/ButtonCls.tsx
import React, {useState, useEffect} from 'react';
import {RootState} from '../../../../Store/store';
import { useDispatch, useSelector} from 'react-redux'
import { toggleModal, toggleWorkswear } from '../../../../Store/Slice/ModalWindowSlice'
import { statusUserChecked } from '../../../../Store/Slice/UserSlice'
import {removeWorkWear, workWearStatusFix} from '../../../../Store/Slice/WorkwearSlice'
import {DeleteIcon} from '../../Icons/icons'
// import { ReactComponent as CustomIcon } from '../../../../assets/edit-button-svgrepo-com.svg'; 


export const ModalPanel =() => {
  const selectId = useSelector((state: RootState) => state.modal.visibleID);
  const selectUserAll = useSelector((state: RootState) => state.users);
  const selectWorkswearAll = useSelector((state: RootState) => state.workswears);
  const selectedUser = selectUserAll.find(user => user.id === selectId);
  const dispatch = useDispatch();
 
 
  const handleClickModal =()=> {
    dispatch(toggleModal(0))
  }
  
  const handleClickWorkswear =()=> {
        dispatch(toggleWorkswear( selectId))
  }
  
  const handleClickWorkswearStatusFix =(el)=> {
        dispatch(workWearStatusFix(el))
          console.log (el)
  }

  const handleClickRemoveWorkswear =(el)=> {
        dispatch(removeWorkWear( el))
          console.log (el)
  }


     const [objArr, setValue] = useState(selectWorkswearAll);

     const selectedUserWworkswear = objArr.filter(workswear => workswear.idUser === selectId);

      useEffect(() => {
        setValue(selectWorkswearAll);
         // Метод reduce очень удобен для суммирования элементов массива
            const totalPrise = selectedUserWworkswear.reduce((sum, selected) => {
              // Убедимся, что значение является числом (или 0, если undefined/null)
                  return sum + (residual_p(selected.prise, selected.wearing_period, selected.date_issue) || 0);
             }, 0); // Начинаем суммирование с 0  
          setResidualSumm(totalPrise); // Устанавливаем вычисленную сумму в стейт
          // setIsDisabled(selectedUser?.status)
        }, [selectWorkswearAll, selectedUserWworkswear]);

  const [residualSumm, setResidualSumm] = useState(0);
  
  const residual_p =(prise, period, start_date) => {
    const endDate = new Date();
    //  const endDate = new Date(new Date().toDateString());
      const startDate = new Date(start_date);;
      const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
      const millisecondsPerDay = 1000 * 60 * 60 * 24;
      const differenceInDays = Math.round(differenceInMilliseconds / millisecondsPerDay);
    return Math.round((prise * (period*365 -differenceInDays)/(period*365))/10)*10;
  }

  const checkedHandle = () =>{
      dispatch (statusUserChecked(selectedUser?.id))
  }



     return (
    <div >
        <h2>Лична карточка </h2>
        <div className='titleFIO'>
          <h2>{selectedUser?.surname }</h2>
          <h2>{selectedUser?.first_name }</h2>
          <h2>{selectedUser?.patronymic }</h2>
          <label className='labelStyle'>{!selectedUser?.status ? 'Работает' : 'Уволен'}</label>
           <input type='checkbox' className='checkStyle' checked={selectedUser?.status || false} onChange={checkedHandle}></input>
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
                  <td>{ selectedUser?.profession}</td>
                </tr>
            </tbody>
          </table> 
          <table className="user-table">
            <thead>
              <tr>
                <th>Вид СИЗ</th>
                <th>Дата выдачи</th>
                <th>Срок носки</th>
                <th>Стоимость</th>
                <th>Остаток</th>
                <th>Размер</th>
                <th>Рост</th>
                <th>Фиксировать</th>
              </tr>
            </thead>
            <tbody>
              {selectedUserWworkswear.map((selected) => (
                <tr key={selected.id}>
                   <td>{ selected.typeWorkswear}</td>
                  <td> { selected.date_issue} </td>
                  <td>{ selected.wearing_period}</td>
                  <td>{ selected.prise}</td>
                  <td>{residual_p(selected.prise, selected.wearing_period, selected.date_issue)}</td>
                  <td>{selected.size}</td>
                  <td>{selected.height}</td>
                  <td> 
                    <input type='checkbox' checked={selected.fixStatus} onChange={() => handleClickWorkswearStatusFix(selected.id)}></input>
                  </td>
                  <td className='img-viev' onClick={() => handleClickRemoveWorkswear(selected.id)}> 
                    {/* <button className='btn-delete'> */}
                      <DeleteIcon size={48} fill= 'rgb(72, 79, 83)'/>
                    {/* </button> */}
                    {/* <RemoveIcon size={38} fill= 'rgb(44, 44, 44)'/> */}
                  </td>
                </tr>
              ))}
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th>Сумма остатка</th>
                <th>{residualSumm}</th>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </table> 
        <button name="btnCls" className='allBtn btnMenu' onClick={handleClickModal} >Закрыть</button>
        <button name="btnAdd" className='allBtn btnMenu' onClick={handleClickWorkswear} disabled={selectedUser?.status}>Добавить</button>

    </div>
    )
}