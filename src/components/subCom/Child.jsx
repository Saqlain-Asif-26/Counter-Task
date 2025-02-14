import React, { useEffect, useState } from 'react'

function Child(props) {
  const count = props.count;
  useEffect(()=>{
    console.log("Count changed and Updated vlaue is " + count);
  }, [count])
  return (
    <div>
        <h1 className='inline'>{count}</h1>
    </div>
  )
}

export default Child