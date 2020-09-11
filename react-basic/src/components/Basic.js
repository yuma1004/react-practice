import React, {useState}from 'react'

const Basic = (props) => {

  const [count, setCount] = useState(0)


  return (
    <div>
      <button onClick={() => setCount(count+1)}>Count{count}</button>
    </div>
  )
}

export default Basic

