import React from 'react'

const Button = () => {
  const handleClick = () => {
    alert("submit!!")
  }
  const handleClickAgain = () => {
    alert("edit!!")
  }
  const handleClickRepete = () => {
    alert("delete!!")
  }
  return (
    <div className="flex justify-center">
      <button className="rounded-full space-x-4 bg-pink-500" onClick={handleClick}>submit</button>
      <button className="rounded-full space-x-4 bg-green-500" onClick={handleClickAgain}>edit</button>
      <button className="rounded-full space-x-4 bg-yellow-500" onClick={handleClickRepete}>delete</button>
    </div>
  )
}

export default Button;
