
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {RootState} from '../../../Store/store'
import { addUser } from "../../../Store/Slice/UserSlice";

export const PersonalCard = () => {

  const allUsers = useSelector((state:RootState)=> state.users)

  const initialNewUsers = {
    surname: "",
    first_name: "",
    patronymic: "",
    profession: "",
    status: "",
  };


  const [newUser, setNewUser] = useState(initialNewUsers);
  const [users, setUsers] = useState(allUsers);
  const [searchTerm, setSearchTerm] = useState('');

  // const [selectedUserMessage, setSelectedUserMessage] = useState('');

  const filteredUsers = searchTerm
    ? users.filter((user) => {
      const searchLower = searchTerm.toLowerCase();
      const surnameLower = user.surname.toLowerCase();
      const userStatus = user.status;

      return surnameLower.includes(searchLower) && !userStatus;
      // return surnameLower.includes(searchLower);
    })
    : [];


  const dispatch = useDispatch();

  const handleChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
    setSearchTerm(event.target.value);
  };

  //   const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };


    const handleSurnameClick = (user) => {
      setNewUser ({
        surname: user.surname,
        first_name: user.first_name,
        patronymic: user.patronymic,
        profession: user.profession,
        status: user.status,
      });
      // setSelectedUserMessage(`Выбран пользователь: ${user.surname} ${user.first_name}`);
      //  dispatch(toggleModal(user.id))
    };

  const handleSubmit = async () => {
    // если кнопка внутри <form>, то нужно event.preventDefault()
    // event.preventDefault();

    // если dispatch асинхронный (thunk) и вы хотите ждать результата:
    // await dispatch(addUser(user));

    dispatch(addUser(newUser)); // отправляем
    setNewUser(initialNewUsers); // очищаем форму
  };



  return (
    <div className="persCard">
      <h3>Новая карточка</h3>

      <div className="persCardBlok">
        <label className="persCardData">
          Фамилия
          <input
            type="text"
            className="inputCard"
            name="surname"
            value={newUser.surname}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="persCardBlok">
        <label className="persCardData">
          Имя
          <input
            type="text"
            className="inputCard"
            name="first_name"
            value={newUser.first_name}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="persCardBlok">
        <label className="persCardData">
          Отчество
          <input
            type="text"
            className="inputCard"
            name="patronymic"
            value={newUser.patronymic}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="persCardBlok">
        <label className="persCardData">
          Профессия
          <input
            type="text"
            className="inputCard"
            name="profession"
            value={newUser.profession}
            onChange={handleChange}
          />
        </label>
      </div>

             <div className="user-table-container">
      <h2>Поиск работнников</h2>

      {/* <div className="search-bar">
        <input
          type="text"
          placeholder="Введите запрос для поиска по фамилии или имени..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div> */}

      {/* --- Отображение сообщения о выборе пользователя --- */}
      {/* {selectedUserMessage && (
        <div className="user-selection-message">
          {selectedUserMessage}
        </div>
      )} */}

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
                  <td className='tableStyle'>{!user.status ? 'Работает' : 'Уволен'}
                     <input type='checkbox' className='checkStyle' checked={user.status || false} ></input>
                  </td>
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

      <button
        type="button" // безопаснее, если нет <form>
        className="personInput btnMenu allBtn"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};
