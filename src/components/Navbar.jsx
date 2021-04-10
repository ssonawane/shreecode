import React from 'react';

export default class Navbar extends React.Component {

    render() {

        const navBrand = {
            fontWeight: "600",
            fontFamily: "cursive",
            color: "white"
        }

        return <React.Fragment>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#" style={navBrand}>Shree Code</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                React
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">React Interview Questions</a>

                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us <span className="sr-only">(current)</span></a>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </React.Fragment >
    }
}