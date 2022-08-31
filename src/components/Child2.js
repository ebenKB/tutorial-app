import React, { useEffect } from 'react';

const Child2 = (props) => {
  const data = props.data;
  const setData = props.setData;

  useEffect(() => {
    setTimeout(() => {
      setData({
        ...data,
        age: 91,
      })
    }, 5000)
  }, []);

  return (
    <div>Child2
      <ul>
        <li>Name {data.Name}</li>
        <li>Gender: {data.gender}</li>
        <li>Age: {data.age}</li>
        <li>Height: {data.height}</li>
      </ul> 
    </div>
  )
}

export default Child2