import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <div className="container-fluid">
                <Link href='/' >
                    <Image src='/logo.svg' width={200} height={150} alt='Logo TecnoZone'/>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar