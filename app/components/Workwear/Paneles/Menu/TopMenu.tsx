import React, { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { toggleVisibleUser } from '../../../../Store/Slice/ModalWindowSlice'
import {RootState} from '../../../../Store/store'
// import { statusUserChecked } from '../../../Store/Slice/UserSlice'

export const TopMenu =()=>{

    const dispatch = useDispatch();

    const userStatusChect = useSelector(( state:RootState)=> state.modal.userVisible)

    useEffect(() => {
        userStatusChect
      }, [userStatusChect]);



    // console.log (userStatusChect)

    const handleCheckboxChange =()=>{
        dispatch(toggleVisibleUser(2))
    } 




    return (
        <div className="topMenu">
            <label>
                <input
                type="checkbox"
                checked={userStatusChect}
                onChange={handleCheckboxChange}
                />
                Не показывать уволеных
            </label>
            {/* <button onClick={checkState}>Get State</button> */}
        </div>
    )
}