import React, { useEffect, useRef } from 'react'

function Parent() {
    const count = useRef(0);
    const increment = () => count.current = count.current + 1;
    const decrement = () => {
        if(count.current >= 1){
            return count.current = count.current - 1;
        }
        else{
            return count.current = 0;
        }
    };
    useEffect(()=>{
        console.log("Count changed and Updated vlaue is " + count.current);
      }, [count.current])
    console.log("parent " + count.current);
    
  return (
        <div className='p-16 text-3xl font-semibold text-center'>
        <h1 className='p-4'>Here is the Counter:</h1>
        <div className='flex justify-center items-center gap-10'>
            <button onClick={()=>increment()} className='border border-gray-700 bg-sky-500 py-4 px-3'>+</button>
            <h1 className='inline'>{count.current}</h1>
            <button onClick={()=>decrement()} className='border border-gray-700 bg-sky-500 p-4'>-</button>
        </div>
        <p className='text-xl mt-8 italic text-gray-600'>Please also check the console..!</p>
    </div>
  )
}

export default Parent
