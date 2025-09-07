import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import Ex from './Components/Ex'
import axios from 'axios'
const App = () => {
  const [data, setData] = useState([])

const getData=async()=>{
 const response=await axios.get("https://picsum.photos/v2/list")
setData(response.data)
console.log("hii")
}

  useEffect(() => {
    getData()  
  }, [])
  
//react router dom
  return (
    <div className=' h-screen overflow-x-hidden w-full  bg-red-100'>
     {/* {
      users.map((user,idx)=>{
       return <Card key={idx} username={user.name} city={user.city} age={user.age} profession={user.profession}/>
      })
     }
     <Ex name="hello"/>
 */}
 {/* <button onClick={(getData)} className='bg-blue-400 rounded w-40 h-20 text-3xl active:scale-90'> Get data</button> */}
 {/* <div className='bg-red-600'>
 {
  data.map((elem,idx)=>{
    return <div key={idx} className='bg-black mb-2 text-white flex items-center justify-between w-full'>
<img src={elem.download_url} className='h-10 w-10'/>
<h1> {elem.author}</h1>
    </div>
  })
 } </div> */}
    </div>
  )
}

export default App