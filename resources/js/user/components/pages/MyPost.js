import React, {Component} from 'react';
import { withRouter } from "react-router";
import { Post } from '../functions/PostFunction';
import Modal from "../partials/Modal";

class MyPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allpost: [],
            method: '',
            id: 0,
            header_post: '',
            isi_post: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    loadPost(){
        Post.get((response) => {
            this.setState({
                allpost: response.data
            });
            console.log(response);
        }, (err) => {
            console.log(err.message);
        });
    }

    updatePost(){
        Post.update(this.state.id, {
            header_post: this.state.header_post,
            isi_post: this.state.isi_post,
        }, (response) => {
            this.loadPost();
        },(err) => {
            console.log(err);
        });
    }

    deletePost(id){
        Post.delete(id,(response) => {
            this.loadPost();
        },(err) => {
            console.log(err);
        });
    }

    addPost() {
        Post.add({
            header_post: this.state.header_post,
            isi_post: this.state.isi_post,
        }, (response) => {
            this.loadPost();
        },(err) => {
            console.log(err);
        });
    }

    newPost(method, id, header_post, isi_post){
        this.setState({
            method: method,
            id: id,
            header_post: header_post,
            isi_post: isi_post
        })
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault();
        if (this.state.method == 'Add'){
            this.addPost();
        }else{
            this.updatePost();
        }
    }

    componentDidMount() {
        this.loadPost();
    }

    render() {
        var count = 1;
        return (
            <div className="content-wrapper">
                <div className="shadow bg-light rounded-lg mx-4 my-5" style={{borderTop: '4px solid #dee2e6'}}>
                    <section className="content-header pl-3">
                        <h2>My Post</h2>
                    </section>

                    <section className="pl-3">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalupdate"
                                onClick={this.newPost.bind(this, 'Add', 0, '', '')}>
                            Add Post
                        </button>
                    </section>

                    <section className="content">
                        <div className="row p-4 table-responsive-md">
                            <table className="table">
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Gambar</th>
                                    <th scope="col">Judul</th>
                                    <th scope="col">Isi</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.allpost.map(post => {
                                    return (
                                        <tr key={post.id}>
                                            <th scope="row">{count++}</th>
                                            <td>
                                                <img style={{height: '2rem', width: '2rem'}} src="/assets/icon.svg" alt="" />
                                            </td>
                                            <td>{post.header_post}</td>
                                            <td>{post.isi_post}</td>
                                            <td>
                                                <button type="button" className="text-body btn bg-transparent mr-4"
                                                        data-toggle="modal" data-target="#modalupdate"
                                                        onClick={this.newPost.bind(this, 'Update', post.id, post.header_post, post.isi_post)}>
                                                    <i className="nav-icon fa fa-edit"></i>
                                                </button>
                                                <button type="button" className="text-body btn bg-transparent"
                                                        onClick={this.deletePost.bind(this, post.id)}>
                                                    <i className="nav-icon fa fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                            <Modal title={this.state.method+' Post'}>
                                <form noValidate onSubmit={this.onSubmit} >
                                    <div className="form-group">
                                        <label>Judul Post</label>
                                        <input type="text"
                                               className="form-control"
                                               name="header_post"
                                               value={this.state.header_post}
                                               onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Isi Post</label>
                                        <input type="text"
                                               className="form-control"
                                               name="isi_post"
                                               value={this.state.isi_post}
                                               onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="d-flex mt-2">
                                        <button type="button" className="btn btn-secondary ml-auto mr-3" data-dismiss="modal">Cancel</button>
                                        <button type="submit" className="btn btn-primary" value="Submit" data-toggle="modal" data-target="#modalupdate">{this.state.method}</button>
                                    </div>
                                </form>
                            </Modal>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default withRouter(MyPost);
