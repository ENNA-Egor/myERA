import { EditIcon } from '../../../Icons/icons'
// 


export const Sizes = () => {

    const buttonClisk = () => {
        console.log('Привет')
    }

    return (
        <div>
            <h3>Размер</h3>
            <input type="Text"></input>
            <button
                className="allBtn btnMenu editMenu"
                onClick={() => buttonClisk()}
            >
                <EditIcon size={25} fill={'aqua'} />
            </button>
        </div>
    )
}