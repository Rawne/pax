import React, { Component } from 'react'
import './background.scss'

interface BackgroundProps {
}

export default class Background extends Component<BackgroundProps> {
  
  render() {
    const { children } = this.props;
    return (
      <div className="fullscreen-bg">
        {children}
      </div>
    );
  }
}
