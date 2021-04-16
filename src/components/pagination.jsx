import React from 'react'

export default function Pagination(props) {

    if (props.searchIp) {
        return null;
    } else {

        return <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <button className="page-link" onClick={() => props.callPagination('prev')}>Previous</button>
                </li>
                <li className="page-item active"><button className="page-link" onClick={() => props.callPagination('1')}>1</button></li>
                <li className="page-item"><button className="page-link" onClick={() => props.callPagination('2')}>2</button></li>
                <li className="page-item">
                    <button className="page-link" onClick={() => props.callPagination('next')}>Next</button>
                </li>
            </ul>
        </nav>
    }
}