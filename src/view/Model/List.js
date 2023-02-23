import React from 'react'
import { Lists } from './ListData'

export const List = () => {
  return (
    <>
    {
      Lists.map((list,index)=>{
        return(
          <div className='box' key={index}>
            <input type={list.type} value={list.name} id={list.id} onClick={()=> console.log(list)}/>js
          </div>
        )
      })
    }  
    </>
  )
}
