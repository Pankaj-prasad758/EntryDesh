import React, { useEffect, useState } from 'react'

function GithubApi() {
    const [data, setData] = useState([])

    useEffect(() => {
    fetch("https://api.github.com/users/Pankaj-prasad758")
    .then((response) => response.json())
    .then((data) => {console.log(data)
        setData(data)}
    )
    },[])
  return (
    <div className='p-4 bg-black text-green-400 w-full text-3xl rounded-2xl mt-10 mb-10'>Github User: {data.login}  </div>

  )
}

export default GithubApi