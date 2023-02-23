import React, {useEffect,useState } from 'react'
import './UserApi.css'

const UserApi = () => {
  const [data, setUser] = useState([]);
  
  useEffect(()=>{
    fetch("https://api.github.com/users").then((res)=>res.json()).then((data)=>setUser(data)).catch((err)=> console.log(err))
  },[])
  
  
    return (
    <div className='UserApi'>
        <h1>Fetch Api Dumy JSON</h1>
            {
                data.map((element,index)=>{
                    return(
                        <div key={index} className="UserApiContent">
                            <img src={element.avatar_url} alt="avatar"/>
                            <p>ID {element.id}</p>
                            <p>Name {element.login}</p>
                        </div>
                    )
                })
            }
    </div>
  )
}

export default UserApi