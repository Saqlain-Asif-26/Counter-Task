import React, { useState } from 'react'
import Child from './subCom/Child';

function Parent() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => {
        if(count >= 1){
            return setCount(count - 1);
        }
        else{
            return setCount(0);
        }
    };
  return (
        <div className='p-16 text-3xl font-semibold text-center'>
        <h1 className='p-4'>Here is the Counter:</h1>
        <div className='flex justify-center items-center gap-10'>
            <button onClick={()=>increment()} className='border border-gray-700 bg-sky-500 py-4 px-3'>+</button>
            <Child count={count} />
            <button onClick={()=>decrement()} className='border border-gray-700 bg-sky-500 p-4'>-</button>
        </div>
        <p className='text-xl mt-8 italic text-gray-600'>Please also check the console..!</p>
    </div>
  )
}

export default Parent
