import React from 'react'

import '@/app/globals.css'

import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className='navbar-brand' href='/' >
                    <Image src='/logo.svg' width={200} height={150} alt='Logo TecnoZone'/>
                </Link>
                <div className='navbar-nav me-auto mb-2 mb-lg-0' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link active h1' href={'/'}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link active h1' href={'/about'}>About us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link active h1' href={'/shop'}>Shop</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link active h1' href={'/contact'}>Contacts</Link>
                        </li>
                    </ul>
                </div>
                <form className="d-flex justify-content-center" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn p-3 text-primary-emphasis bg-info-subtle border border-info-subtle rounded-3" type="submit">Search</button>
                </form>
            </div>
        </nav>
  )
}

export default Navbar