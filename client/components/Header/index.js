import React from 'react'
import { Link } from 'react-router-dom'
import { map } from 'lodash'

const links = [
  { to: '/', children: 'App'},
  { to: '/welcome', children: 'WelcomeNote'},
  { to: '/image', children: 'RoundImage'}
]

const Header = () => (
  <div>
    { map(links, (props, id) => <Link
        className='pa2'
        key={ id }
        { ... props }
      />
    )}
  </div>
)

export default Header
