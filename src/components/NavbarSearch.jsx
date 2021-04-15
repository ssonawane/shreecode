import React, { Component } from 'react';

export default function NavbarSearch(props) {



    const handleChange = (event) => {
        //console.log(event.target.value)
        props.getSearchInput(event.target.value);
    }


    return <React.Fragment>
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
            {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
        </form>
    </React.Fragment>

}