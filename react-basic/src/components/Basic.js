import React from 'react'

const Basic = (props) => {

  const clickHandler = () => {
    console.log("clicked")
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <h1>I am {props.name}</h1>
      <h1>I am {props.age} years old</h1>
    </div>
  )
}

export default Basic

