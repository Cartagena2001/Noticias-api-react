import React from 'react'
import PropType from 'prop-types'

const Header = ({titulo}) => {
  return (
    <div className='text-center py-5 bg-gradient-to-r from-cyan-500 to-blue-500
    '>
        <a href="/" className='text-white text-3xl font-bold'>{titulo}</a>
    </div>
  )
}

Header.prototype = {
    titulo: PropType.string.isRequired
}

export default Header
