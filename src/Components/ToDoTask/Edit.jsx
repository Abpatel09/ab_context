import React from 'react'
import Add from './Add'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
    const navi = useNavigate()

    const clickToUpdateing = () => {





        navi('/list')
    }
    return (
        <>
            <div>
                <Add clickToUpdt={ clickToUpdateing } />
            </div>
        </>
    )
}

export default Edit