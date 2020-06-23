import React, {Component} from 'react';
import {getAllPost} from "../../user/components/functions/PostFunction";

class WorkerPage extends Component {
    constructor() {
        super()
        this.state = {
            allpost: [],
        }
    }

    getTwoData(data) {
        const items = []
        if (data.length >= 10) {
            for(var i = 0; i < 10; i++) {
                items[i] = data[i]
            }
            return items
        }
        return data
    }

    componentDidMount() {
        getAllPost().then(res => {
            this.setState({
                allpost: this.getTwoData(res.data),
            })
        })
    }

    render() {
        let allpost = this.state.allpost.map((post) => {
            return(
                <div className="card" key={post.id}>
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
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
