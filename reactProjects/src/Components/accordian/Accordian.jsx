import React, { useState } from 'react'
import data from './data'
import './style.css'

const Accordian = () => {
    const [selected, setselected] = useState(null)

    const singleSelection = (currentId) =>{
        setselected(currentId === selected ? null : currentId)
    }

    return (
  <div className='container'>
    <div className='accordian'>
      {data.map((item) => (
        <>
          <div onClick={() => singleSelection(item.id)} className='question' key={item.id}>
            <h2>{item.question}</h2>
          </div>
          <div className='answer'>
            {selected === item.id && <div>{item.answer}</div>}

          </div>
        </>
      ))}
    </div>
  </div>
)

}

export default Accordian