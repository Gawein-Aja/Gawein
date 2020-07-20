import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Post } from "../functions/PostFunction";
import WorkerCard from "../partials/WorkerCard";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allpost: []
        };
    }

    componentDidMount() {
        Post.all(
            response => {
                this.setState({
                    allpost: response.data
                });
            },
            err => {
                console.log(err.message);
            }
        );
    }

    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item active">
                                        <Link to="/">Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item active"></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title py-2">Dashboard</h3>
                        </div>
                        <div className="card-body p-0">
                            <div className="row p-4">
                                {this.state.allpost.map(post => {
                                    return (
                                        <WorkerCard
                                            key={post.id}
                                            imgpath={
                                                post.image != ""
                                                    ? "/uploads/posting/" +
                                                      post.image
                                                    : ""
                                            }
                                            title={post.header_post}
                                            desc={post.isi_post}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Dashboard;
