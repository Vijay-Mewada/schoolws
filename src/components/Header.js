import React from 'react'

function Header() {
  return (
    <div>
      <div className='bg-pink-600 py-1 px-6 flex'>
        <div className='w-1/3'>
          <a href="mailto:School@gmail.com"  className='text-xs font-semibold '>School@gmail.com</a>
        </div>
        <div className='w-1/3'>
          <div className='mx-auto flex justify-center'>
            <a href="mailto:School@gmail.com" className='text-xs font-semibold'>School@gmail.com</a>
          </div>
        </div>
        <div className='w-1/3'>
          <div className='ml-auto flex'>
          <a href="tel:9074993859" className='text-xs font-semibold ml-auto flex'>9074993859</a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Header
