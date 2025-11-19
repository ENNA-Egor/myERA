
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../../Store/Slice/UserSlice";

export const PersonalCard = () => {
  const initialNewUsers = {
    surname: "",
    first_name: "",
    patronymic: "",
    profession: "",
  };

  const [user, setUser] = useState(initialNewUsers);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    // если кнопка внутри <form>, то нужно event.preventDefault()
    // event.preventDefault();

    // если dispatch асинхронный (thunk) и вы хотите ждать результата:
    // await dispatch(addUser(user));

    dispatch(addUser(user)); // отправляем
    setUser(initialNewUsers); // очищаем форму
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
            value={user.surname}
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
            value={user.first_name}
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
            value={user.patronymic}
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
            value={user.profession}
            onChange={handleChange}
          />
        </label>
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
