"use client";
import { PiFlowerLotusBold } from "react-icons/pi";
import Link from 'next/link';
import { useState } from "react";


function Navbar() {

  const [search,setSearch] = useState('');
  return (
    <div>
        <nav className='logo'>
        <Link  href ='/'><PiFlowerLotusBold /></Link>
        
        <div className="search"> 
          <input
          className="justify-items-end"
          type="text"
          value={search}
          onChange={(e)   => setSearch(e.target.value)}
          placeholder="search..."
          />
        </div>
        </nav>
    </div>
    

  )
}
 
export default Navbar;