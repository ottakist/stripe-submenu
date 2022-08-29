import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext} from './context';
const Submenu = () => {
  const { isSubmenuOpen, location,page:{page,links}} = useGlobalContext();
  const container = useRef(null)
  const [collums, setCollums] = useState(null);
  useEffect(()=>{
    
    const submenu = container.current
    const {center,bottom} = location
    submenu.style.left=`${center}px`
    submenu.style.top=`${bottom}px`
    setCollums(links.length)
    // let collumsAmount = links.length
    // submenu.style.marginBottom=`4px`
  },[location,links])
  return <aside className={`${isSubmenuOpen?'submenu show':'submenu'}`} ref={container}><h4>
    {page}</h4>
    <div className={`submenu-center col-${collums}`}>
      {links.map((link,index)=>{
        const {label,icon,url} = link
        return <a href={url} key={index}>
          {icon}
          {label}
         
        </a>
      })}
    </div>
    </aside>
};

export default Submenu;
