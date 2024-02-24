import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link href='/' >
                    <Image src='/logo.svg' width={200} height={150} alt='Logo TecnoZone'/>
                </Link>
                <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link active' href={'/'}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link active' href={'/about'}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link active' href={'/product'}>Products</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar