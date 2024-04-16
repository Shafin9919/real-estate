import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

function Root(props) {
  return (
    <div>
       <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

Root.propTypes = {}

export default Root
