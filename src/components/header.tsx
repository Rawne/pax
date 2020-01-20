import { Link } from 'gatsby'
import React from 'react'
import Image from './image'

interface propTypes {
  siteTitle: string,
}

const Header = ({ siteTitle }: propTypes) => (
  <header>
    <div className="header">
      <h1 style={{ margin: 0, width: `300px` }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Image />
        </Link>
      </h1>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
