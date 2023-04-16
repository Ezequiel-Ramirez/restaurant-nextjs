import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layaut = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layaut