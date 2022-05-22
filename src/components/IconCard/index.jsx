import React from 'react'
import PropTypes from 'prop-types'
import { StIconCard } from './style'

const IconCard = ({ children, icons, dataAos, dataDelay }) => {
  return (
    <StIconCard data-aos={dataAos} data-aos-delay={dataDelay}>
      <div className="icon-container">
        {icons && icons.map((Icon, idx) => <Icon key={idx} color="white" />)}
      </div>
      <div className="content">{children}</div>
    </StIconCard>
  )
}
IconCard.defaultProps = {}
IconCard.propTypes = {
  dataDelay: PropTypes.string,
  dataAos: PropTypes.string,
  icons: PropTypes.array,
  children: PropTypes.node,
}

export default IconCard
