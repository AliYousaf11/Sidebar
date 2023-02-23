import React, { useState } from 'react'
import './Accordion.css'

const Accordion = ({question, answer}) => {
    const [show, setShow] = useState(false);

  return (
    <div className='Accordion'>
      <div className='main_content' onClick={()=>setShow(!show)}>
        <p>{question}</p>
        <p className='icon'>{show?"- ":"+ "}</p>
      </div>
      {
        show && <p className='Sub_content'>{answer}</p>
      }
    </div>
  )
}

export default Accordion