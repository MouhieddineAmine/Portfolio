import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='text-gray-400 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l'>
<h1 className='text-3xl font-bold primary-color ml-4'>Mouhieddine Amine</h1>
<ul className='hidden md:flex'>
    <li className='p-2'><a href='/'>Home</a></li>
    <li className='p-2'><a href='/pageprojcannabis'>Projet Inventaire Cannabis</a></li>
    <li className='p-2'><a href='/pageprojblog'>Projet Blog</a></li>
    <li className='p-2'><a href='/contact'>Contact</a></li>
    <li className='p-2'><a href='/listetemoignages'>Liste Temoignages</a></li>
    <li className='p-2'><a href='/gerertemoignages'>Gerer Temoignages</a></li>
</ul>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        
    
    <div className={nav ? 'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
    <h1 className='text-3xl primary-color m-4'>Mouhieddine Amine</h1>
    <ul className='p-8 text 2xl'>
        <li className='p-5'><a href='/'>Home</a></li>
        <li className='p-5'><a href='/pageprojcannabis'>Projet Inventaire Cannabis</a></li>
        <li className='p-5'><a href='/pageprojblog'>Projet Blog</a></li>
        <li className='p-5'><a href='/contact'>Contact</a></li>
        <li className='p-5'><a href='/listetemoignages'>Liste Temoignages</a></li>
        <li className='p-5'><a href='/gerertemoignages'>Gerer Temoignages</a></li>
    </ul>

            
        </div>
        
        </div>
  )
}

export default Navbar