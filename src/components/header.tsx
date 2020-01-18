import { Link } from 'gatsby'
import React from 'react'
import Image from './image'

interface propTypes {
  siteTitle: string,
}

const Header = ({ siteTitle }: propTypes) => (
  <header
    style={{
      background: `grey`,
    }}
  >
    <div
      style={{
        left: `50%`,
        transform: `translateX(-50%)`,
        position: `absolute`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
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
