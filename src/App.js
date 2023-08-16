/* eslint-disable react/jsx-pascal-case */
// // To-DoDemo
// import React, { useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import ToDocontext from './Context/ToDocontext'
// import Dashboard from './Components/To-DoDemo/Dashboard'
// import Add from './Components/To-DoDemo/Add'
// import List from './Components/To-DoDemo/List'
// import Navbar from './Components/To-DoDemo/Navbar'
// import './App.css'

// // ToDoTask 

// const App = () => {
//   // To-DoDemo 
//   const [allD, setAllD] = useState([])
//   return (
//     <>
//       <BrowserRouter>
//         <ToDocontext.Provider value={ { allD, setAllD } }>
//           <Navbar />
//           <Routes>
//             <Route path='/' element={ <Dashboard /> } />
//             <Route path='/add' element={ <Add /> } />
//             <Route path='/list' element={ <List /> } />
//           </Routes>

//         </ToDocontext.Provider>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

// ToDoTask 

import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ToDoTaskContext from './Context/ToDoTaskContext'
import Dash from './Components/ToDoTask/Dash'
import Add from './Components/ToDoTask/Add'
import List from './Components/ToDoTask/List'
import Edit from './Components/ToDoTask/Edit'

const App = () => {
  const [allData, setAllData] = useState([])
  return (
    <>
      <BrowserRouter>
        <ToDoTaskContext.Provider value={ { allData, setAllData } }>
          <Routes>
            <Route path='/' element={ <Dash /> } />
            <Route path='/add' element={ <Add /> } />
            <Route path='/list' element={ <List /> } />
            <Route path='/edit/:id' element={ <Edit /> } />
          </Routes>
        </ToDoTaskContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App