import React from 'react'
import { Link } from 'gatsby';
import AboutUs from '../../images/pax-1.jpg';
import OurBeer from '../../images/pax-2.jpg';
import './navigation.scss'

interface NavigationProps {
}

export default class Navigation extends React.Component<NavigationProps> {
  
  render() {
    const { } = this.props;
    return (
      <div className="navigation">
        <Link className="nav nav-about" to="/about/"><img src={AboutUs}/><span className="nav-text">Over ons</span></Link>
        <Link className="nav nav-beer" to="/beer/"><img src={OurBeer}/><span className="nav-text">Ons bier</span></Link>
      </div>
    );
  }
}
