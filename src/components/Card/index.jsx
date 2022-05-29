import React from 'react'
import PropTypes from 'prop-types'
import { StCard } from './style'

const Card = ({ children, width, height, dataAos, dataDelay, ...rest }) => {
  return (
    <StCard
      data-aos={dataAos}
      data-aos-delay={dataDelay}
      width={width}
      height={height}
      {...rest}
    >
      {children}
    </StCard>
  )
}

Card.propTypes = {
  dataDelay: PropTypes.string,
  dataAos: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default Card
