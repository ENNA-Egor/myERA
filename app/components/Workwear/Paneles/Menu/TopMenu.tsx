

export const TopMenu =()=>{

// const checkState =()=> {
//     console.log ('Привет');
// }


    return (
        <div className="topMenu">
            <label>
                <input
                type="checkbox"
                checked={true}
                // onChange={handleCheckboxChange}
                />
                Не показывать уволеных
            </label>
            {/* <button onClick={checkState}>Get State</button> */}
        </div>
    )
}