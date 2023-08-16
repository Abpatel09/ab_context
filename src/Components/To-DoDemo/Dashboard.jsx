import React, { } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
            return (
            <>
                <Link to={ '/add' }>
                    <button>Click To Add</button>
                </Link>
                <Link to={ '/list' }>
                    <button>Click To List</button>
                </Link>
            </>
            )
        </>
    )
}

export default Dashboard