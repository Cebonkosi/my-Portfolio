import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Innovating with code to shape the future.<br className='sm:block hidden'/> Let's turn ideas into reality!</p>     
        <Link to='/contact' className='btn'> Contact </Link>   
    </section>
  )
}

export default CTA