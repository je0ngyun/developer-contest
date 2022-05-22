import React from 'react'
import { StMain } from './style'
import PropTypes from 'prop-types'

const Main = ({ children }) => {
  return <StMain>{children}</StMain>
}

Main.propTypes = {
  children: PropTypes.node,
}

export default Main
