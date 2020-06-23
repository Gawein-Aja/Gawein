import React, {Component} from 'react';
import {Post} from "../functions/PostFunction";
import WorkerCard from "../partials/WorkerCard";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allpost: []
        };
    }

    componentDidMount() {
        Post.all((response) => {
            this.setState({
                allpost: response.data
            });
        }, (err) => {
            console.log(err.message);
        });
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="shadow bg-light rounded-lg mx-4 my-5" style={{borderTop: '4px solid #dee2e6'}}>
                    <section className="content-header pl-3">
                        <h2>Dashboard</h2>
                    </section>

                    <section className="content">
                        <div className="row p-4">
                            {this.state.allpost.map(post => {
                                return (
                                    <WorkerCard
                                        key={post.id}
                                        imgpath="/assets/icon.svg"
                                        title={post.header_post}
                                        desc={post.isi_post}
                                    />
                                )
                            })}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Dashboard;
