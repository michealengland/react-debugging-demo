import * as React from 'react'
import {PropTypes} from 'prop-types'

export default class Hover extends React.Component {
  state = {
    hovering: false,
  }
  mouseOver = () => {
    this.setState({
      hovering: true,
    })
  }
  mouseOut = () => {
    this.setState({
      hovering: false,
    })
  }
  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.children(this.state.hovering)}
      </div>
    )
  }
}

Hover.propTypes = {
  children: PropTypes.any,
}
