import { useDispatch} from 'react-redux'
import {toggleWorkswear } from '../../../../Store/Slice/ModalWindowSlice'


export const WorkwearAdd =() => {
    const dispatch = useDispatch();

    const handleClickWorkswear =()=> {
               dispatch(toggleWorkswear(1))
         }

    return (
        <div>
            <h3>Главный</h3>
            <input type="Text" placeholder="Тип СИЗ"></input>
            <input type="Text" placeholder="Период носки"></input>
            <input type="Text" placeholder="Стоимость"></input>
            <input type="Text" placeholder="Рзмер"></input>
            <input type="Text" placeholder="Рост"></input>
            <button onClick={handleClickWorkswear}>Close</button>
        </div>
    )
}