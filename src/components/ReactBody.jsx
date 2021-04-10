import React from 'react';
import axios from 'axios';

export default class ReactBody extends React.Component {

    constructor() {
        super();
        this.state = {
            intrvwQues: []
        }
    }

    componentDidMount() {
        axios.get('./data.json').then(resp => {
            this.setState({ intrvwQues: resp.data })
        }).catch(err => {
            console.log("error", err)
        })
    }

    render() {

        const renderingItems = this.state.intrvwQues.map(ques => <div className="card align-top" key={ques.id}>
            <div className="" id={"headingThree" + ques.id}>
                <h5 className="mb-0 text-wrap">
                    <button className="btn btn-link collapsed text-wrap" type="button" data-toggle="collapse" data-target={"#collapseOne" + ques.id} aria-expanded="false" aria-controls={"collapseOne" + ques.id}>
                        {ques.question}
                    </button>
                </h5>
            </div>
            <div id={"collapseOne" + ques.id} className="collapse" aria-labelledby={"heading" + ques.id} data-parent="#accordionExample">
                <div className="card-body">
                    {ques.answer}
                </div>
            </div>
        </div>)


        return <div className="row justify-content-center">
            <div className="col-md-6 accordion" id="accordionExample">
                {renderingItems}
                <br /> <br />
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    }
}