import React, { useRef } from 'react'
import Card from "./Card"

function Foreground() {
    const ref = useRef(null);

    const data = [
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
        },
        {
            desc: "lorem is the background color if vyfc gvfgc vgc j",
            filesize:".9mb",
            close:true,
            tag: { isOpen : true, tagTitle:"Download Now", tagColor:"blue"}
        }

    ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item,index)=>(
            <Card key={index} data={item} reference = {ref}/>
        ))}
    </div>
  )
}

export default Foreground