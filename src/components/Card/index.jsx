import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StCard } from './style'

const Card = ({ children, width, height, dataAos, dataDelay, ...rest }) => {
  const [isStopDelay, setIsStopDelay] = useState(false)

  useEffect(() => {
    if (dataDelay) {
      setTimeout(() => {
        setIsStopDelay(true)
      }, Number(dataDelay))
    }
  }, [])

  return (
    <StCard
      data-aos={dataAos}
      data-aos-delay={!isStopDelay ? dataDelay : '0'}
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
