import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { toggleModal } from '../../../../Store/Slice/ModalWindowSlice'
import {RootState} from '../../../../Store/store'

export const MainPanel = () => {

  const dispatch = useDispatch();
  const initialUsers = useSelector((state:RootState)=> state.users)


  
 useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers]);
    
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  // --- НОВОЕ СОСТОЯНИЕ для сообщения о клике ---
  const [selectedUserMessage, setSelectedUserMessage] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = searchTerm
    ? users.filter((user) => {
      const searchLower = searchTerm.toLowerCase();
      const surnameLower = user.surname.toLowerCase();
      // const firstNameLower = user.first_name.toLowerCase();

      // return surnameLower.includes(searchLower) || firstNameLower.includes(searchLower);
      return surnameLower.includes(searchLower);
    })
    : [];

  const handleSurnameClick = (user) => {
    setSelectedUserMessage(`Выбран пользователь: ${user.surname} ${user.first_name}`);
     dispatch(toggleModal(user.id))
  };

  return (
    <div className="user-table-container">
      <h2>Поиск работнников</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Введите запрос для поиска по фамилии или имени..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* --- Отображение сообщения о выборе пользователя --- */}
      {selectedUserMessage && (
        <div className="user-selection-message">
          {selectedUserMessage}
        </div>
      )}

      {searchTerm ? (
        filteredUsers.length > 0 ? (
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
              {filteredUsers.map((user) => (
                <tr key={user.id} >
                  {/* <td>{user.id}</td> */}
                  <td className='tableStyle'>
                    <span
                      className="clickable-surname"
                      onClick={() => handleSurnameClick(user)}
                    >
                      {user.surname}
                    </span>
                  </td>
                  <td className='tableStyle'>{user.first_name}</td>
                  <td className='tableStyle'>{user.patronymic}</td>
                  <td className='tableStyle'>{!user.status ? 'Работает' : 'Уволен'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-results">Совпадений не найдено.</p>
        )
      ) : (
        <p className="no-results">Введите запрос для поиска.</p>
      )}
    </div>
  );
}







