


import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { toggleModal } from '../../../Store/Slice/ModalWindowSlice'
import {RootState} from '../../../Store/store'
import { statusUserChecked } from '../../../Store/Slice/UserSlice'

import {TopMenu} from './Menu/TopMenu'

export const FulListPanel = () => {
  const userStatusChect = useSelector(( state:RootState)=> state.modal.userVisible);

  const dispatch = useDispatch();
  const initialUsers = useSelector((state:RootState)=> state.users)
  const initialLimitUsers =initialUsers.filter(user => user.status === false);
  const realUsers = (!userStatusChect ?  initialUsers:initialLimitUsers );
  
  

  const handleSurnameClick = (user) => {
       dispatch(toggleModal(user.id))
    };


  useEffect(() => {
      setUsers(initialUsers);
      setStatus(userStatusChect);
    }, [initialUsers, userStatusChect]);
 
  // Состояние для хранения полного списка пользователей
  const [users, setUsers] = useState(realUsers);
  const [status, setStatus] = useState(userStatusChect);

    // const checkedHandle = () =>{
    //     dispatch (statusUserChecked(user.id))
    // }
 
     const checkedHandle = (userId) => {
    dispatch(statusUserChecked(userId));
  };
  

  return (
    <div className="user-table-container">
      <TopMenu/>
      <h2>Полный список работников</h2>
      <br></br>
        <table className="user-table">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {realUsers.map((user) => (
              <tr key={user.id}>
                {/* <td>{user.id}</td> */}
                <td >
                  <span
                      className="clickable-surname"
                      onClick={() => handleSurnameClick(user)}
                    >
                      {user.surname}
                    </span>
                </td>
                <td>{user.first_name}</td>
                <td>{user.patronymic}</td>
                <td>{user.status ? 'Уволен' : 'Работает'}
                  <input type='checkbox' className='checkStyle' checked={user.status || false} onChange={() => checkedHandle(user.id)}></input>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

    </div>
  );
}