import React from 'react'
import imgBlog from '../assets/BlogPhoto.png'

const PageProjBlog = () => {
  return (
    <div className='max-w-[1200px] mx-auto mt-24 p-4'>
      <h1 className='text-4xl font-bold text-gray-300 text-center mb-10'>Projet Blog sur la Finance <a href='https://build-wealth-blog.com/' target='_blank' className='text-gray-500 hover:text-blue-200 transition-colors duration-300'>(click → build-wealth-blog.com)</a></h1>
    
            <img src={imgBlog} alt="Project 1" className="rounded-lg shadow-md hover:shadow-lg transition duration-300" />
      
      <div className='bg-gray-800 text-white mt-12 p-6 rounded-lg shadow-md'>
        <h2 className='text-3xl font-semibold mt-4 mb-8'>Description du Projet</h2>
        <p className='text-lg mb-6'>
        Ce projet est un blog dédié à la finance, où je partage des analyses, des conseils pratiques et des stratégies pour optimiser vos finances personnelles et investissements. Le blog est construit en utilisant WordPress, une plateforme de gestion de contenu populaire et flexible.
          </p>
        
        <h2 className='text-3xl font-semibold mt-20 mb-8'>Technologies Utilisées</h2>
        <ul className='list-disc list-inside space-y-2 mb-5' >
        <li className='text-lg'>WordPress</li>
        <li className='text-lg'>Elementor</li>
          <li className='text-lg'>PHP</li>
          <li className='text-lg'>MySQL</li>
          <li className='text-lg'>HTML/CSS</li>
          <li className='text-lg'>JavaScript</li>
          <li className='text-lg'>Plugins WordPress (comme Yoast SEO, Akismet, etc.)</li>
        </ul>
      </div>
    </div>
  )
}

export default PageProjBlog