import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams()
  return (
    <div className='p-4 bg-black text-green-400 w-full text-3xl rounded-2xl mt-10 mb-10'>User: {userId} </div>
  )
}

export default User