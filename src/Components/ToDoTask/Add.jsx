import React, { useContext, useState } from 'react'
import ToDoTaskContext from '../../Context/ToDoTaskContext'
import { Link } from 'react-router-dom'

const Add = ({ clickToUpdt }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [hobby, setHobby] = useState("")
    const [location, setLocation] = useState("")
    const [gender, setGender] = useState("")

    const contextGet = useContext(ToDoTaskContext)

    const object = {
        name,
        email,
        number,
        password,
        hobby,
        location,
        gender
    }

    const clickToAdd = (e) => {
        contextGet.setAllData([...contextGet.allData, object])
        setName("")
        setEmail("")
        setNumber("")
        setPassword("")
        setHobby("")
        setLocation("")
        setGender("")

    }
    return (
        <>
            <center>
                <div onClick={ clickToUpdt }>
                    <h1>Add Form</h1>
                    <input type="text"
                        placeholder="Name"
                        onChange={ (e) => setName(e.target.value) }
                        value={ name }
                        name='name'
                    /> <br />
                    <input type="email"
                        placeholder="Email"
                        onChange={ (e) => setEmail(e.target.value) }
                        value={ email }
                        name='email'
                    /> <br />
                    <input type="number"
                        placeholder="Number"
                        onChange={ (e) => setNumber(e.target.value) }
                        value={ number }
                        name='number'
                    /> <br />
                    <input type="password"
                        placeholder="Password"
                        onChange={ (e) => setPassword(e.target.value) }
                        value={ password }
                        name='password'
                    /> <br />
                    {/* <input type="text"
                        placeholder="Hobby"
                        onChange={ (e) => setHobby(e.target.value) }
                        value={ hobby }
                        name='hobby' /> <br /> */}
                    <label>
                        <input type="checkbox"
                            value='cricket'
                            onChange={ (e) => setHobby(e.target.value) } />
                        Cricket
                        <input type="checkbox"
                            value='traveling'
                            onChange={ (e) => setHobby(e.target.value) } />
                        Traveling
                        <input type="checkbox"
                            value='draving'
                            onChange={ (e) => setHobby(e.target.value) } />
                        Draving
                        <input type="checkbox"
                            value='music'
                            onChange={ (e) => setHobby(e.target.value) } />
                        Music
                    </label> <br />

                    <label>Choos a Location:</label>
                    <select name="location" onChange={ (e) => setLocation(e.target.value) }>
                        <option >
                            Location
                        </option>
                        <option value="Ladakh">
                            Ladakh
                        </option>
                        <option value="Kedarnath">
                            Kedarnath
                        </option>
                        <option value="Darjeeling">
                            Darjeeling
                        </option>
                        <option value="Daman">
                            Daman
                        </option>
                    </select> <br />

                    <label>
                        <input type="radio"
                            name='male'
                            value='male'
                            onChange={ (e) => setGender(e.target.value)
                            } /> Male
                        <input type="radio"
                            name='female'
                            value='female'
                            onChange={ (e) => setGender(e.target.value) }
                        />Female
                    </label>
                </div>

                <button type="button" class="btn btn-success" onClick={ clickToAdd }>SAVE</button>

                <Link to={ '/' }>
                    <button type="button" class="btn btn-danger">Cancel</button>
                </Link>
            </center>
        </>
    )
}

export default Add