import React from 'react'
import { Link } from 'react-router-dom'

const Dash = () => {
    return (
        <>
            <div class="d-flex justify-content-center">
                <Link to={ '/add' }>
                    <button type="button" class="btn btn-dark">ADD</button>
                </Link>
                <Link to={ '/list' }>
                    <button type="button" class="btn btn-secondary">LIST</button>
                </Link>
            </div>
        </>
    )
}

export default Dash