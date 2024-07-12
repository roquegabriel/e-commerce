import React, { useContext, useEffect, useState } from 'react'
//import context
import { SidebarContext } from '../contexts/SidebarContext'
//import icons
import { BsBag } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

  //event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  }, [])

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='flex container mx-auto items-center justify-between h-full'>
        <Link to={'/'}>
          <div>
            <img src={Logo} alt="" className='w-44' />
          </div>
        </Link>
        <div onClick={() => { setIsOpen(!isOpen) }} className='cursor-pointer flex relative'>
          <BsBag className='text-2xl' />
          <div className='absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center bg-red-500'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header