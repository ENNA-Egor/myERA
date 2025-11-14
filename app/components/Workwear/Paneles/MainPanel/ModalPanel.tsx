// src/components/ButtonCls.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../Store/store'; // Импортируем тип AppDispatch
import { toggleModal } from '../../../../Store/ModalSlice'; // Импортируем action

import './ButtonCls.css'; // Ваши стили

function ModalPanel() {
  const dispatch = useDispatch<AppDispatch>(); // Получаем dispatch с правильным типом

  const handleClick = () => {
    dispatch(toggleModal()); // Отправляем action для переключения модального окна
  };

  return (
    <button className="btnCls" onClick={handleClick}>
      Переключить модальное окно
    </button>
  );
}

export default ModalPanel;
