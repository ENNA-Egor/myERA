import React, {useState} from 'react'
import {RootState} from '../../../../Store/store'
import { useDispatch, useSelector} from 'react-redux'
import {toggleWorkswear } from '../../../../Store/Slice/ModalWindowSlice'
import {addWorkWear } from '../../../../Store/Slice/WorkwearSlice'


export const WorkwearAdd =() => {
    const dispatch = useDispatch();

    const reference = useSelector((state: RootState) => state.reference);
    const idSelectedUser = useSelector((state: RootState) => state.modal.idSelectedUser);

    
    const [formData, setFormData] = useState({
        selectedSize: '',   // Соответствует name="selectedSizeId"
        selectedPriceValue: '', // Соответствует name="selectedPriceValue"
        selectedTypeWorkswear: '',   
        selectedWearingPeriods: '',   
        selectedHeight: '',  
    });

    const handleChange = (event) => {
        const { name, value } = event.target; // Получаем имя поля и его новое значение

        setFormData(prevFormData => ({
            ...prevFormData,        // Копируем предыдущее состояние
            [name]: value           // Обновляем только то поле, имя которого совпадает с name
        }));       
    };
    
    
    const handleClickWorkswear =()=> {
        dispatch(toggleWorkswear(1))
    }
    const addWorkswear =()=> {
        dispatch(addWorkWear(formData, idSelectedUser))
    }
    
    return (
        <div>
            <h3>Главный</h3>
                <h2>Выбор типа СИЗ:</h2>
                <select
                    id="typeSelect"
                    name="selectedTypeWorkswear" // Имя соответствует ключу в стейте formData
                    value={formData.selectedTypeWorkswear}
                    onChange={handleChange} // Используем унифицированный обработчик
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '120px' }}
                    >
                    <option value="">-- Выберите тип СИЗ --</option>
                    {reference.typesWorkswears.map((typesWorkswear) => (
                        <option
                        value={typesWorkswear.name}
                        key={typesWorkswear.id}
                        >
                            {typesWorkswear.name}
                        </option>
                    ))}
                </select>
                <h2>Выбор стоимости:</h2>
                <select
                    id="priceSelect"
                    name="selectedPriceValue" // Имя соответствует ключу в стейте formData
                    value={formData.selectedPriceValue}
                    onChange={handleChange} // Используем унифицированный обработчик
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '120px' }}
                    >
                    <option value="">-- Выберите стоимость --</option>
                    {reference.prices.map((priceItem) => (
                        <option
                        value={priceItem.value}
                        key={priceItem.id}
                        >
                            {priceItem.value}
                        </option>
                    ))}
                </select>
            <h2>Выбор периода носки:</h2>
                <select
                    id="wearingPeriodsSelect"
                    name="selectedWearingPeriods" // Имя соответствует ключу в стейте formData
                    value={formData.selectedWearingPeriods}
                    onChange={handleChange} // Используем унифицированный обработчик
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '120px' }}
                    >
                    <option value="">-- Выберите период носки --</option>
                    {reference.wearingPeriods.map((wearingPeriodItem) => (
                        <option
                        value={wearingPeriodItem.period}
                        key={wearingPeriodItem.id}
                        >
                            {wearingPeriodItem.period}
                        </option>
                    ))}
                </select>
  
                         <h2>Выбор размера:</h2>
                <select
                    id="sizeSelect"
                    name="selectedSize" // Имя соответствует ключу в стейте formData
                    value={formData.selectedSize}
                    onChange={handleChange} // Используем унифицированный обработчик
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '120px' }}
                    >
                    <option value="">-- Выберите размер --</option>
                    {reference.sizes.map((sizeItem) => (
                        <option
                        value={sizeItem.size}
                        key={sizeItem.id}
                        >
                            {sizeItem.size}
                        </option>
                    ))}
                </select>
             <h2>Выбор роста:</h2>
                <select
                    id=" heightSelect"
                    name="selectedHeight" // Имя соответствует ключу в стейте formData
                    value={formData.selectedHeight}
                    onChange={handleChange} // Используем унифицированный обработчик
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '120px' }}
                    >
                    <option value="">-- Выберите рост --</option>
                    {reference. heights.map(( heightItem) => (
                        <option
                        value={ heightItem.value}
                        key={ heightItem.id}
                        >
                            { heightItem.value}
                        </option>
                    ))}
                </select>
            <button onClick={addWorkswear}>Submit</button>
            <button onClick={handleClickWorkswear}>Close</button>
        </div>
    )
}