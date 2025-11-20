


import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'
// import { toggleModal } from '../../../Store/Slice/ModalWindowSlice'
import {RootState} from '../../../Store/store'

export const FulListPanel = () => {

//   const dispatch = useDispatch();
  const initialUsers = useSelector((state:RootState)=> state.users)


  useEffect(() => {
      setUsers(initialUsers);
    }, [initialUsers]);
 
  // Состояние для хранения полного списка пользователей
  const [users, setUsers] = useState(initialUsers);
 
  

  return (
    <div className="user-table-container">
      <h2>Список Пользователей</h2>

        <table className="user-table">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                {/* <td>{user.id}</td> */}
                <td>{user.surname}</td>
                <td>{user.first_name}</td>
                <td>{user.patronymic}</td>
              </tr>
            ))}
          </tbody>
        </table>

    </div>
  );
}