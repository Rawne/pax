import React, { Component } from 'react'
import './story.scss'
import { Link } from 'gatsby';

interface StoryProps {
  title: string;
}

export default class Story extends Component<StoryProps> {
  
  render() {
    const { children, title } = this.props;
    return (
      <div className="content">
        <div className="narrow">
          <h1 className="pax-header">{title}</h1>
          {children}
          <Link to="/">Terug naar de homepage</Link>
        </div>
      </div>
    );
  }
}
