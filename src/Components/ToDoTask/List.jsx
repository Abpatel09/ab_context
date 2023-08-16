import React, { useContext } from 'react'
import ToDoTaskContext from '../../Context/ToDoTaskContext'
import { Link } from 'react-router-dom';

const List = () => {
    const contextGet = useContext(ToDoTaskContext);

    const clickToDlt = (id) => {
        contextGet.setAllData(contextGet.allData.filter((ele, index) => index !== id))
    }
    return (
        <>

            <table className="table table-light table-striped border border-success p-2 mb-2  border-3">
                <thead className="border border-secondary">
                    <tr>
                        <th>No.1</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Hobby</th>
                        <th>Location</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        contextGet.allData.map((ele, index) => {
                            return (
                                <tr key={ index }>
                                    <th>{ index + 1 }</th>
                                    <th>{ ele.name }</th>
                                    <th>{ ele.email }</th>
                                    <th>{ ele.number }</th>
                                    <th>{ ele.hobby }</th>
                                    <th>{ ele.location }</th>
                                    <th>{ ele.gender }</th>
                                    <th>
                                        <Link to={ `/edit/${index}` }>
                                            <button type="button" class="btn btn-primary m-1">Edit</button>
                                        </Link>
                                        <button type="button" class="btn btn-danger" onClick={ () => clickToDlt(index) }>Delete</button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default List