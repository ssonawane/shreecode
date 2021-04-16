import React from 'react';
import NavbarSearch from './NavbarSearch';

export default class Navbar extends React.Component {

    getSearchInput = (input) => {
        this.props.getSearchInput(input);
    }

    selectQuesType(type) {
        this.props.selectQuesType(type)
    }

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
                                Interview Questions
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <button className="dropdown-item" onClick={() => this.selectQuesType('react')}>React</button>
                                <button className="dropdown-item" onClick={() => this.selectQuesType('redux')}>Redux</button>
                            </div>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">About Us <span className="sr-only">(current)</span></a>
                        </li> */}

                    </ul>
                    <NavbarSearch getSearchInput={this.getSearchInput} />
                </div>
            </nav>
        </React.Fragment >
    }
}