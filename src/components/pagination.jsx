import React from 'react'

export default function Pagination(props) {
    console.log(props.pageIndex);
    if (props.searchIp || props.defaultIntrQues.length < 10) {
        return null;
    } else {

        return <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {/* <li className="page-item disabled">
                    <button className="page-link" onClick={() => props.callPagination('prev')}>Previous</button>
                </li> */}
                <li className={"page-item " + (props.pageIndex === 1 && "active")}><button className="page-link" onClick={() => props.callPagination('1')}>1</button></li>
                <li className={"page-item " + (props.pageIndex === 2 && "active")}><button className="page-link" onClick={() => props.callPagination('2')}>2</button></li>
                {/* <li className="page-item">
                    <button className="page-link" onClick={() => props.callPagination('next')}>Next</button>
                </li> */}
            </ul>
        </nav>
    }
}