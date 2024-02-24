import React from 'react'

import '@/app/globals.css'

import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" href={'/'}>TECNOZONE</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" href={'/about'}>About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href={'/shop'}>Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href={'/contact'}>Contacts</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
  )
}

export default Navbar