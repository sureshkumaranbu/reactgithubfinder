import React, {Component} from 'react';

import { Link } from 'react-router-dom'

export class Navbar extends Component {
    static defaultProps = {
        title: "Github"
    }
    render() {
        return (
            <div className="navbar bg-primary">
                <h5>{this.props.title}</h5>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;