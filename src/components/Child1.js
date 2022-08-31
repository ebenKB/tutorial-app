import React, { useEffect } from 'react'
import { useState } from 'react';

const Child1 = (props) => {
  const [success,] = useState("female")
  const data = props.data;
  const setData = props.setData;

  useEffect(() => {
    console.log("Use effect is running...");
    if(success === "female") {
      setTimeout(() => {
        console.log("I AM BRAIDING MY HAIR")
      }, 3000)
    }
  }, [success]);

  return (
    <div>
      Child1
      <span>
        --DATA FROM PARENT--
      </span>
      <ul>
        <li>Name: {data.name}</li>
        <li>Gender: {data.gender}</li>
        <li>Age: {data.age}</li>
        <li>Height: {data.height}</li>
      </ul>
    </div>
  )
}

export default Child1