import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Post } from "../../functions/PostFunction";

class MyPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allpost: []
        };
    }

    loadPost() {
        Post.get(
            response => {
                this.setState({
                    allpost: response.data
                });
            },
            err => {
                console.log(err.response);
            }
        );
    }

    deletePost(id) {
        Post.delete(
            id,
            response => {
                this.loadPost();
            },
            err => {
                console.log(err);
            }
        );
    }

    componentDidMount() {
        this.loadPost();
    }

    render() {
        var count = 1;
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>My Post</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item active">
                                        <Link to="/posts/">My Post</Link>
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
                            <h3 className="card-title">My Post</h3>
                        </div>
                        <div className="card-body table-responsive-sm p-md-0 p-2">
                            <table className="table table-striped projects">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ width: "1%" }}>
                                            #
                                        </th>
                                        <th
                                            scope="col"
                                            style={{ width: "10%" }}
                                        >
                                            Gambar
                                        </th>
                                        <th
                                            scope="col"
                                            style={{ width: "10%" }}
                                        >
                                            Judul
                                        </th>
                                        <th
                                            scope="col"
                                            style={{ width: "55%" }}
                                        >
                                            Isi
                                        </th>
                                        <th
                                            scope="col"
                                            style={{ width: "15%" }}
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.allpost.map(post => {
                                        return (
                                            <tr key={post.id}>
                                                <th scope="row">{count++}</th>
                                                <td>
                                                    <div
                                                        style={{
                                                            background:
                                                                "url(" +
                                                                (post.image ==
                                                                ""
                                                                    ? "/assets/image_not_found.png"
                                                                    : "/uploads/posting/" +
                                                                      post.image) +
                                                                ") 50% 50% no-repeat",
                                                            backgroundSize:
                                                                "auto 100%",
                                                            height: "2rem",
                                                            width: "2rem"
                                                        }}
                                                    ></div>
                                                </td>
                                                <td>{post.header_post}</td>
                                                <td>
                                                    <p
                                                        style={{
                                                            display:
                                                                "-webkit-box",
                                                            WebkitLineClamp: 3,
                                                            WebkitBoxOrient:
                                                                "vertical",
                                                            overflow: "hidden",
                                                            marginBottom: 0,
                                                            marginBlockEnd: 0
                                                        }}
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                post.isi_post
                                                        }}
                                                    />
                                                </td>
                                                <td className="text-right py-0 px-2 px-md-3 align-middle">
                                                    <div className="btn-group btn-group-sm">
                                                        <Link
                                                            to={
                                                                "/posts/edit/" +
                                                                post.id
                                                            }
                                                            type="button"
                                                            className="btn btn-info"
                                                            style={{
                                                                width: "5%"
                                                            }}
                                                        >
                                                            <i className="nav-icon fa fa-edit"></i>
                                                        </Link>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
                                                            style={{
                                                                width: "5%"
                                                            }}
                                                            onClick={this.deletePost.bind(
                                                                this,
                                                                post.id
                                                            )}
                                                        >
                                                            <i className="nav-icon fa fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(MyPost);
