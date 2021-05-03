import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <h1 className="title">Travel Journal</h1>
                <div className="links">
                    <p className="link"><Link className="link" to='/'>Home</Link></p>
                    <p className="link"><Link className="link" to='/about'>About</Link></p>
                    <p className="link"><Link className="link" to='/contact'>Contact Us</Link></p>


                </div>
            </div>
        )
    }
}

export default Nav
