import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2';

const Parent = () => {
  const [data, setData] = useState({
    name: "success",
    gender: "female",
    age: 21,
    height: "2ft",
  });
  
  return (
    <div>
      <h1>--Parent components--</h1>
      <Child1 data={data} setData={setData} />
      <Child2 data={data} setData={setData} />
    </div>
  )
}

export default Parent