import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../../../Store/Slice/ModalWindowSlice'
// import './App.css'; // Для стилей таблицы и формы поиска

export const MainPanel = () => {

  const dispatch = useDispatch();
  // const vizVindows = useSelector()

  const initialUsers = [
    { id: 1, surname: 'Иванов', first_name: 'Владимир', patronymic: 'Петрович' },
    { id: 2, surname: 'Петров', first_name: 'Иван', patronymic: 'Сидорович' },
    { id: 3, surname: 'Сидоров', first_name: 'Юрий', patronymic: 'Викторович' },
    { id: 4, surname: 'Бобров', first_name: 'Семён', patronymic: 'Николаевич' },
    { id: 5, surname: 'Мишин', first_name: 'Василий', patronymic: 'Олегович' },
    { id: 6, surname: 'Володин', first_name: 'Сидор', patronymic: 'Ефимович' },
    { id: 7, surname: 'Сидоров', first_name: 'Михаил', patronymic: 'Викторович' },
  ];

  const [users] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  // --- НОВОЕ СОСТОЯНИЕ для сообщения о клике ---
  const [selectedUserMessage, setSelectedUserMessage] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(toggleModal())
    console.log('gadgh')
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
    console.log('Кликнули по пользователю:', user);
    // --- ИСПОЛЬЗУЕМ СОСТОЯНИЕ ВМЕСТО ALERT ---
    setSelectedUserMessage(`Выбран пользователь: ${user.surname} ${user.first_name} (ID: ${user.id})`);
    // Опционально: можно сбросить сообщение через несколько секунд
    // setTimeout(() => setSelectedUserMessage(null), 5000);
  };

  return (
    <div className="user-table-container">
      <h2>Список Пользователей</h2>

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
                <th>ID</th>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <span
                      className="clickable-surname"
                      onClick={() => handleSurnameClick(user)}
                    >
                      {user.surname}
                    </span>
                  </td>
                  <td>{user.first_name}</td>
                  <td>{user.patronymic}</td>
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







