import React from 'react'
import {Footer, Container, Logo, LogoutBtn} from '../index'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

  const authStatus = useSelector(data => data.status)
  const navigate = useNavigate() // This hook is used to navigate to a different URl in React, Can use the hrep and onload here

  /*
  Now Usually in Production app this is they show the nav items,
  They create an array with objects. Each obj has the link, component and status property. The status property will tell based on the auth status
  to show it or not. For example, if user is logged in, then we do not show him the login button

  On the UI an loop will be put on these and based on the status of each item, they will be shown to the user
  */

  const navItem = [
    {
      name: "Home",
      slug: "/",
      status: true
    },
    {
      name: "Login",
      slug: "/login",
      status: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      status: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      status: authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      status: authStatus
    }
  ]
  return (
    <header
    className='py-2 shadow bg-gray-600'
    >
      <Container>
        <nav className='flex'>
          <div className='mr-6'>
            <Link to='/'>
              <Logo width='60px' />
            </Link>
            <ul className='flex ml-auto'>
                {navItem.map( (item) =>
                  item.status ? (
                    <li key={item.name}>
                      <button onClick={() => navigate(item.slug)}
                        className='inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full'
                        > {item.name}</button>
                    </li>
                  ) : null
                )}

                {authStatus && (
                  <li><LogoutBtn /></li>
                )}
            </ul>
          </div>
        </nav>

      </Container>



    </header>
  )
}

export default Header