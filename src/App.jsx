import React, { useState } from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {

  const [first, setfirst] = useState([
    {
        desc: "lorem is the background color if vyfc gvfgc vgc j",
        filesize:".9mb",
        close:true,
        tag: { isOpen : true, tagTitle:"Pending", tagColor:"blue"}
    },
    {
        desc: "lorem is the background color if vyfc gvfgc vgc j",
        filesize:".9mb",
        close:true,
        tag: { isOpen : true, tagTitle:"Download Now", tagColor:"blue"}
    },
    {
        desc: "lorem is the background color if vyfc gvfgc vgc j",
        filesize:".9mb",
        close:true,
        tag: { isOpen : true, tagTitle:"Download Now", tagColor:"blue"}
    }

]);

  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background data={first}/>
      <Foreground/>
    </div>
  )
}

export default App