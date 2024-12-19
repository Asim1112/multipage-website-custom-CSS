import React from 'react'
import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
  <header className="header">
            <h1 className="logo">The Watch Vault</h1>
            <nav>
                <Link href="/" >Home</Link>
                <Link href="/About" >About</Link>
                <Link href="/Watches" >Watches</Link>
                <Link href="/Contact" >Contact</Link>
                <FaShoppingCart style={{color: "white", fontSize: "20px"}} />
            </nav>


  </header>
  )
}

export default Header
