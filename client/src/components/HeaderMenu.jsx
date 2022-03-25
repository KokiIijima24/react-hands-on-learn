import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

function HeaderMenu() {
  const [navToggle, setNavToggle] = useState(false)

  /* Progress bar */
  //Source: https://alligator.io/js/progress-bar-javascript-css-variables/
  var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight',
    progress = document.querySelector('#progress');
  var scrollpos = window.scrollY
  var header = document.getElementById('header')
  var navcontent = document.getElementById('nav-content')
  let scroll = 0
  
  const isScrollToggle = useCallback(() => {
    console.log('sclolled', scrollpos)

    /*Refresh scroll % width*/
    scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100


    if (!progress?.style && progress?.style !== 0) {
      return
    }

    progress.style.setProperty('--scroll', scroll + '%')

    /*Apply classes for slide in bar*/
    scrollpos = window.scrollY

    if (scrollpos > 10) {
      header.classList.add('bg-white')
      header.classList.add('shadow')
      navcontent.classList.remove('bg-gray-100')
      navcontent.classList.add('bg-white')
    } else {
      header.classList.remove('bg-white')
      header.classList.remove('shadow')
      navcontent.classList.remove('bg-white')
      navcontent.classList.add('bg-gray-100')
    }
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', isScrollToggle, { passive: true })
    return () => {
      document.removeEventListener('scroll', isScrollToggle, { passive: true })
    }
  }, [])

  return (
    <div>
      <nav id='header' className='fixed w-full z-10 top-0'>
        <div
          id='progress'
          className='h-1 z-20 top-0'
          style={{
            background:
              'linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)',
          }}
        ></div>
        <div className='w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3'>
          <div className='pl-4'>
            <a
              className='text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl'
              href='#'
            >
              Minimal Blog
            </a>
          </div>

          <div className='block lg:hidden pr-4'>
            <button
              id='nav-toggle'
              className='flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none'
              onClick={() => setNavToggle(!navToggle)}
            >
              <svg
                className='fill-current h-3 w-3'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>

          <div
            className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20 ${navToggle ? '' : 'hidden'
              }`}
            id='nav-content'
          >
            <ul className='list-reset lg:flex justify-end flex-1 items-center'>
              <li className='mr-3'>
                <Link
                  className='inline-block py-2 px-4 text-gray-900 font-bold no-underline'
                  to='/home'
                >
                  Home
                </Link>
              </li>
              <li className='mr-3'>
                <Link
                  className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4'
                  to='recipe-list'
                >
                  Recipe List
                </Link>
              </li>
              <li className='mr-3'>
                <a
                  className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4'
                  href='#'
                >
                  link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HeaderMenu
