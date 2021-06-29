import * as React from 'react'
import PropTypes from 'prop-types'
import Hover from './Hover'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
    zIndex: '99',
  },
}

export default function Tooltip({text, children}) {
  return (
    <div style={styles.container}>
      <Hover>
        {hover => (
          <div>
            {hover === true && <div style={styles.tooltip}>{text}</div>}
            {children}
          </div>
        )}
      </Hover>
    </div>
  )
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.any,
}

Tooltip.defaultProps = {
  text: 'This is a tooltip!',
}
