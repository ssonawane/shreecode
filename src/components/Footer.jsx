import React from 'react';

export default class Footer extends React.Component {
    constructor() {
        super();
    }


    render() {
        return <React.Fragment>
            <footer className="bg-dark text-center text-white sticky-bottom">
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2021 Copyright :
                <a className="text-white" href="#">&nbsp;shreecode.co.in</a>
                </div>
            </footer>
        </React.Fragment>
    }
}