import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Post } from "../../functions/PostFunction";
import FormData from "form-data";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            header_post: "",
            isi_post: "",
            image: "",
            image_file: null
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    loadPost() {
        Post.getbyid(
            this.state.id,
            response => {
                console.log(response);
                this.setState({
                    id: response.data.id,
                    header_post: response.data.header_post,
                    isi_post: response.data.isi_post
                });
            },
            err => {
                console.log(err.response);
            }
        );
    }

    onChange(e) {
        if (e.target.name == "image") {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;

            this.setState({ image_file: files[0] });
        }
        this.setState({ [e.target.name]: e.target.value });
    }

    handleChange(text) {
        this.setState({ isi_post: text });
    }

    onSubmit(e) {
        e.preventDefault();

        let data = new FormData();
        data.append("header_post", this.state.header_post);
        data.append("isi_post", this.state.isi_post);
        data.append("image", this.state.image_file);
        data.append("updated_at", new Date().toLocaleString());
        data.append("_method", "put");

        Post.update(
            this.state.id,
            data,
            response => {
                this.loadPost();
            },
            err => {
                console.log(err.response);
            }
        );
    }

    componentDidMount() {
        this.loadPost();
    }

    render() {
        const modules = {
            toolbar: [
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" }
                ],
                ["link", "clean"]
            ]
        };

        const formats = [
            "header",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link"
        ];

        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Post Edit</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item active">
                                        <Link to="/posts/">My Post</Link>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Edit
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">General</h3>
                                </div>
                                <form noValidate onSubmit={this.onSubmit}>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>Judul Post</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="header_post"
                                                value={this.state.header_post}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Isi Post</label>
                                            <ReactQuill
                                                theme="snow"
                                                modules={modules}
                                                formats={formats}
                                                value={this.state.isi_post}
                                                onChange={this.handleChange}
                                            ></ReactQuill>
                                        </div>
                                        <div className="form-group">
                                            <label>File input</label>
                                            <div className="input-group">
                                                <div className="custom-file">
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        name="image"
                                                        value={this.state.image}
                                                        onChange={this.onChange}
                                                        accept="image/x-png,image/gif,image/jpeg"
                                                    />
                                                    <label className="custom-file-label">
                                                        {this.state.image
                                                            ? this.state
                                                                  .image_file
                                                                  .name
                                                            : "Choose file"}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-footer">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            value="Submit"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(Edit);
