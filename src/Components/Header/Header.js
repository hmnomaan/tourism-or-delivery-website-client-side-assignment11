import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";
import Logo from '../../Images/logo.png';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    // ----------- Authentication Info --------
    const { user, logOut } = useAuth();

    // ----------- Navigation --------
    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
            <div className="container">
                <NavLink className="navbar-brand me-3" to="/">
                    <img className="img-fluid navbar-brand-logo" src={Logo} alt="" />
                    TourInChina</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/"><i className="fas fa-home me-1"></i>Home</NavLink>
                        <NavLink className="nav-link" to="/packages"><i className="fas fa-th-list me-1"></i>Packages</NavLink>
                        <NavLink className="nav-link" to="/about"><i className="fas fa-info-circle me-1"></i>About</NavLink>
                        <NavLink className="nav-link" to="/contact"><i className="fas fa-comments me-1"></i>Contact</NavLink>
                        
                        {/* -----------------   Protected Nav Links for Logged In Users  --------------- */}
                        {
                            user?.email ?
                                (
                                    <li className="nav-item dropdown">
                                        <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-users-cog me-1"></i>Admin Panel
                                        </span>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><NavLink className="dropdown-item" to="/my-orders">My Orders</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/manage-all-orders">Manage All Orders</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/add-a-new-package">Add A New Package</NavLink></li>
                                        </ul>
                                    </li>
                                )
                                :
                                (
                                    <></>
                                )
                        }
                    </div>
                </div>


                {/* ----------- User Information -------- */}
                <div>
                    {
                        user?.email ?
                            (
                                <div>

                                    <div>
                                        <span className="text-muted"><small>{user.email}</small></span>
                                        <button className="btn btn-blue ms-2" onClick={logOut}><i className="fas fa-sign-out-alt me-1"></i>Log Out</button>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <NavLink className="nav-link" to="/login"><i className="fas fa-user me-1"></i>Login</NavLink>
                            )
                    }

                </div>
            </div>
        </nav>
    );
};

export default Header;
