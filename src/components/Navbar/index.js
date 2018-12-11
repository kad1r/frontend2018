import React from 'react'
import Logo from '../Logo'
import Menu from '../Menu'
import './navbar.scss'

const menuData = [
  {
    title: 'Ana Sayfa',
    link: '/',
    icon: require('../../assets/images/icons/inbox.png'),
  },
  {
    title: 'Süper Fırsatlar',
    link: '/',
    icon: require('../../assets/images/icons/inbox.png'),
  },
  {
    title: 'Yardım',
    link: '/',
    icon: require('../../assets/images/icons/inbox.png'),
  },
  {
    title: 'İletişim',
    link: '/',
    icon: require('../../assets/images/icons/inbox.png'),
  },
]

const Navbar = () => {
  return (
    <div className="navbar d-none d-md-flex d-lg-flex d-xl-flex">
      <div className="container">
        <Logo />
        <Menu data={menuData} />
      </div>
    </div>
  )
}

export default Navbar
