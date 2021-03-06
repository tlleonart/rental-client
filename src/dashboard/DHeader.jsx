import React, { useEffect, useState, Fragment } from 'react'

import { useAuth } from '../hooks/useAuth'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import logo from '../assets/logotemplate.svg'

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Dashboard', href: '/dashboard', current: false },
  { name: 'Usuarios', href: '/dashboard/users', current: false },
  { name: 'Hoteles', href: '/dashboard/hotels', current: false }
]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DHeader () {
  const [userInfo, setUserInfo] = useState(null)

  const auth = useAuth()

  useEffect(() => {
    const userJSON = window.localStorage.getItem('user')

    if (userJSON) {
      const user = JSON.parse(userJSON)

      setUserInfo(user)
    }
  }, [])

  return (
    <>
      <Disclosure as='nav' className='bg-gray-800'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8'>
              <div className='flex items-center justify-between h-20'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                    <a href='/'>
                      <img className='w-15 bg-white px-6 py-3 rounded-full' src={logo} alt='Workflow' />
                    </a>
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(item.current ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='hidden md:block'>
                  <div className='ml-4 flex items-center md:ml-6'>
                    {/* Profile dropdown */}
                    <Menu as='div' className='ml-3 relative'>
                      <div>
                        <Menu.Button className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                          <span className='sr-only'>Open user menu</span>
                          <img className='h-12 w-12 rounded-full' src={`https://ui-avatars.com/api/?background=ff3f3f&color=fff&bold=true&name=${userInfo?.firstName || userInfo?.organization}`} alt='' />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <button className='block px-4 py-2 text-sm text-gray-700' onClick={() => auth.logOut()}>
                            Sign Out
                          </button>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className='-mr-2 flex md:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? <XIcon className='block h-6 w-6' aria-hidden='true' /> : <MenuIcon className='block h-6 w-6' aria-hidden='true' />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='md:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(item.current ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className='pt-4 pb-3 border-t border-gray-700'>
                <div className='flex items-center px-5'>
                  <div className='flex-shrink-0'>
                    <img className='h-14 w-14 rounded-full' src={`https://ui-avatars.com/api/?background=ff3f3f&color=fff&bold=true&name=${userInfo?.firstName || userInfo?.organization}`} alt='' />
                  </div>
                  <div className='ml-3'>
                    <div className='text-base font-medium leading-none text-white'>{userInfo?.name || userInfo?.organization}</div>
                    <div className='text-sm font-medium leading-none text-gray-400'>{userInfo?.email}</div>
                  </div>
                </div>
                <div className='mt-3 px-2 space-y-1'>
                  <button className='block px-4 py-2 text-sm text-white bg-gray-600 rounded-md' onClick={() => auth.logOut()}>
                    Sign Out
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
