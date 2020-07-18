import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-primary p-2 text-warning">
      <nav className="navbar navbar-expand-lg  navbar-light bg-light">
        <h1 className="navbar-brand font-weight-bold">SocialMedia</h1>

        <Link to='/posts'>
          <Button>Posts</Button>
        </Link>
        <Link to='/albums'>
          <Button>Albums</Button>
        </Link>
        <div>
        </div>
      </nav>
    </div>
  )
}

export default Header