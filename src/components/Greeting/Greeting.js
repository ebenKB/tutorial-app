import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Greeting = (props) => {
  /**
   * variableName - This is the name of the variable
   * updateFunction - This is a function that can be used to update the variable
   * initialValue - This is the initial value that is given to the variable.
   */
  // const [variableName, updateFunction] = useState(initialValue);

  let [users, setUsers] = useState(10);

  useEffect(() => {
    console.log("UseEffect is running....");
    setUsers(50);
  }, []); // when the array of dependencies is empty, the useEffect will be called once.
  
  useEffect(() => {
    setTimeout(() => {
      setUsers(users + 10);
    }, 5000)
  }, [users /*array of dependencies*/ ]); // The useEffect function will run any time the users change

  return (
    <div>
      <h1>Hello! {props.username}</h1>
      <h2>Your age is: {props.age}</h2>
      <h1>Total users: {users}</h1>
    </div>
  )
}

export default Greeting