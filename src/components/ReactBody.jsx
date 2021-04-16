import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ReactBody.module.css'
import Pagination from './pagination'

export default function ReactBody(props) {

    const [input, setInput] = useState('');
    const [currentPage, setCurrentPage] = useState('1');
    const [intrvwQues, setIntrvwQues] = useState([]);
    const [defaultIntrQues, setDefaultIntrQues] = useState([]);

    useEffect(() => {
        axios.get('./data.json').then(resp => {
            setDefaultIntrQues(resp.data);
            setIntrvwQues(resp.data.slice(0, 10))
        }).catch(err => {
            console.log("error", err)
        })
    }, []);

    useEffect(() => {
        console.log('updateSearchResult', props.input, defaultIntrQues)
        const filtered = defaultIntrQues.filter(obj => {
            return obj.question.toLowerCase().includes(props.input.toLowerCase())
        })

        setIntrvwQues(filtered);

        if (!props.input) {
            setIntrvwQues(defaultIntrQues.slice(0, 10))
        }

    }, [props.input])

    function getInterQuesList(start, end) {
        setIntrvwQues(defaultIntrQues.slice(start, end));
    }

    function callPagination(item) {
        switch (item) {
            case '1':
                getInterQuesList(0, 10);
                setCurrentPage('1')
                break;
            case '2':
                getInterQuesList(10, 20);
                setCurrentPage('2')
                break;
        }
    }

    const renderingItems = intrvwQues.map(ques => <React.Fragment><div className="align-top" key={ques.id}>
        <div className="" id={"headingThree" + ques.id}>
            <h5 className="mb-0 text-wrap">
                <button className={"btn btn-link collapsed text-dark " + styles.quesText} type="button" data-toggle="collapse" data-target={"#collapseOne" + ques.id} aria-expanded="false" aria-controls={"collapseOne" + ques.id}>
                    {ques.id}. &nbsp;&nbsp;{ques.question}
                </button>
            </h5>
        </div>
        <div id={"collapseOne" + ques.id} className="collapse" aria-labelledby={"heading" + ques.id} data-parent="#accordionExample">
            <div className={"card-body " + styles.ansText}>
                {ques.answer}
            </div>
        </div>
    </div ><hr style={{ 'margin': '0px' }} /></React.Fragment>)


    return <div className="row justify-content-center">
        <div className="col-md-8 accordion" id="accordionExample">
            {renderingItems}
            <br /> <br />
            <Pagination callPagination={callPagination} searchIp={props.input} currentPage={currentPage} />
        </div>
    </div>

}