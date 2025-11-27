import {RootState} from '../../../../Store/store'
import { useDispatch, useSelector} from 'react-redux'
import {toggleWorkswear } from '../../../../Store/Slice/ModalWindowSlice'


export const WorkwearAdd =() => {
    const dispatch = useDispatch();

    const reference = useSelector((state: RootState) => state.reference.sizes);

    console.log (reference)

    const handleClickWorkswear =()=> {
               dispatch(toggleWorkswear(1))
         }

    return (
        <div>
            <h3>Главный</h3>
            <input type="Text" placeholder="Тип СИЗ"></input>
            <input type="Text" placeholder="Период носки"></input>
            <input type="Text" placeholder="Стоимость"></input>
            {/* <select name="select" >
            { reference.map((size)=>(
                <option value={reference.size} key = {reference.id}>{reference.size}</option>
            )
        )
    }
            </select> */}


            <input type="Text" placeholder="Рост"></input>
            <button onClick={handleClickWorkswear}>Close</button>
        </div>
    )
}