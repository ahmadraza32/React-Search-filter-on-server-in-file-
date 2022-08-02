import React, { useState } from 'react'
import { useEffect } from 'react'
import './app.css'
import Table from './Table'
import axios from 'axios'


function App() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    async function go(){
      const res = await axios.get(`http://localhost:5000/?q=${query}`)
      setData(res.data)
    }

    go()
  }, [query])

  return (
    <div className='app'>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} className="search" />
      <Table data={data} />
    </div>
  )
}

export default App
