import React, { Component } from 'react'

export class BodySection extends Component {
  render() {
    return (
      <div className='bodySection'>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default BodySection
