import React, {useState} from 'react'
import {RootState} from '../../../../Store/store'
import { useDispatch, useSelector} from 'react-redux'
import {toggleWorkswear } from '../../../../Store/Slice/ModalWindowSlice'


export const WorkwearAdd =() => {
    const dispatch = useDispatch();

    const reference = useSelector((state: RootState) => state.reference);
    
    const [formData, setFormData] = useState({
        selectedSizeId: '',   // Соответствует name="selectedSizeId"
        selectedPriceValue: '', // Соответствует name="selectedPriceValue"
        selectedColorId: '',    // Соответствует name="selectedColorId"
    });

    const handleChange = (event) => {
        const { name, value } = event.target; // Получаем имя поля и его новое значение

        setFormData(prevFormData => ({
            ...prevFormData,        // Копируем предыдущее состояние
            [name]: value           // Обновляем только то поле, имя которого совпадает с name
        }));
    };

    console.log (reference)

    const handleClickWorkswear =()=> {
               dispatch(toggleWorkswear(1))
         }

    return (
        <div>
            <h3>Главный</h3>
                <h2>Выбор стоимости:</h2>
                <select
                    id="priceSelect"
                    name="selectedPriceValue" // Имя соответствует ключу в стейте formData
                    value={formData.selectedPriceValue}
                    onChange={handleChange} // Используем унифицированный обработчик
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '120px' }}
                >
                    <option value="">-- Выберите размер --</option>
                    {reference.prices.map((priceItem) => (
                        <option
                            value={priceItem.id}
                            key={priceItem.id}
                        >
                            {priceItem.value}
                        </option>
                    ))}
                </select>
            <input type="Text" placeholder="Период носки"></input>
            <input type="Text" placeholder="Стоимость"></input>
             <h2>Выбор размера:</h2>
                <select
                    id="sizeSelect"
                    name="selectedSizeId" // Имя соответствует ключу в стейте formData
                    value={formData.selectedSizeId}
                    onChange={handleChange} // Используем унифицированный обработчик
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '120px' }}
                >
                    <option value="">-- Выберите размер --</option>
                    {reference.sizes.map((sizeItem) => (
                        <option
                            value={sizeItem.id}
                            key={sizeItem.id}
                        >
                            {sizeItem.size}
                        </option>
                    ))}
                </select>
  
            <input type="Text" placeholder="Рост"></input>
            <button onClick={handleClickWorkswear}>Close</button>
        </div>
    )
}