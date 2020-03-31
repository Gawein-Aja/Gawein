import React, {Component} from 'react';
import {getAllPost} from "../tools/PostFunction";

class WorkerPage extends Component {
    constructor() {
        super()
        this.state = {
            allpost: []
        }
    }

    componentDidMount() {
        getAllPost().then(res => {
            this.setState({
                allpost: res
            })
        })
    }

    render() {
        let allpost = this.state.allpost.map((post) => {
            return(
                <div className="card" style="width: 18rem;">
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body" key={post.id}>
                        <h5 className="card-title">{post.header_post}</h5>
                        <p className="card-text">{post.isi_post}</p>
                        <a href="#" className="btn btn-primary">Detail</a>
                    </div>
                </div>
            )
        });

        return (
            <div>{allpost}</div>
        );
    }
}

export default WorkerPage;
