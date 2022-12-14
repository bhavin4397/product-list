import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to='' className="navbar-brand">WCB</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <NavLink to='/CommonData' className="nav-link">New Arrivals</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/Kurta' className="nav-link">kurtas & sets</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/Saree' className="nav-link">Sarees</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/Western' className="nav-link">Western</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input onChange={props.onChangehandler} className="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" style={{marginRight:'8px'}} type="submit"><NavLink to='/Login'>Login</NavLink></button>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">cart</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;