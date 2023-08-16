import React, { useContext, useState } from 'react'
import ToDocontext from '../../Context/ToDocontext'

const Add = () => {
    const contextGet = useContext(ToDocontext);

    const [name, setName] = useState("");

    const setNameData = (e) => {
        setName(e.target.value);
    }
    const saveData = () => {
        contextGet.setAllD([...contextGet.allD, name])
        setName("")
    }

    return (
        <>
            <input type="text" value={ name } onChange={ setNameData } />
            <button onClick={ saveData }>Save</button>

        </>
    )
}

export default Add