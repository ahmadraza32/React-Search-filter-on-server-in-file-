import React, { useState } from 'react'
import {Users} from "./users"
import "./app.css"

function App() {
  const [query, setQuery] = useState('')

  return (
    <div className='app'>
      <input type="text" className="search" value={query} onChange={e => setQuery(e.target.value)} />
      <ul className="list">
        {
          Users.filter(user => user.first_name.toLocaleLowerCase().includes(query)).map(user => {
            return <li className="listItem" key={user.id} >{user.first_name} </li>
          })
        }
      </ul>
    </div>
  )
}

export default App