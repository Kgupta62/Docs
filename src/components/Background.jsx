import React from 'react'

function Background() {
  return (
    <>
        <div className='absolute top-[5%] w-full  py-10 flex justify-center text-zinc-600 font-semibold'>Documents.</div>
        <h1 className='absolute top-1/2 left-1/2 text-[150px] -translate-x-[50%] -traslate-y-[50%] leading-none tracking-tighter text-zinc-900'>Docs.</h1>
        <button className='absolute top-4 right-3  right-0.3 px-4 py-1 bg-slate-950 text-zinc-400 font-bold rounded-full '>Create</button>        
    </>
  )
}

export default Background