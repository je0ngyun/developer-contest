import React from 'react'
import PropTypes from 'prop-types'
import { StTitleContainer } from './style'

const Title = ({ children }) => {
  return (
    <StTitleContainer>
      <h1>{children}</h1>
    </StTitleContainer>
  )
}
Title.propTypes = {
  children: PropTypes.string,
}

export default Title
