import React from 'react'

const Card = (props) => {
console.log(props);
  return (
    <>
        <div className='m-10 bg-red-100 flex items-center flex-col justify-center h-40  rounded-lg'>
            <h1>Username: {props.username}</h1>
            <h1>City: {props.city}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Profession: {props.profession}</h1>
            <button>Add friend</button>
        </div>
    </>
  )
}

export default Card