import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../Banner/Banner'

import headerpic from '../../assets/headerpic.jpg'

function Header(props) {
  return (
<header className="bg-[url('../../src/assets/headerpic.jpg')] h-svh bg-no-repeat">
  
        
         <Banner></Banner>

    </header>
  )
}

Header.propTypes = {}

export default Header
