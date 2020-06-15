import React, {Component} from 'react';
import {getAllPost} from "../../tools/PostFunction";
import WorkerCard from "../../tools/WorkerCard";

class ListWorkers extends Component {
    constructor() {
        super()
        this.state = {
            allpost: [],
        }
    }

    getTenData(data) {
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
                allpost: this.getTenData(res.data),
            })
        })
    }

    render() {
        // let location = use;
        return (
            <main>
                <div className="container-fluid">
                    <div className="my-5 text-center">
                        <h1 >TEMUKAN FREELANCER MU LUR !!</h1>
                        <p>DARI SELURUH PENJURU POLBAN UNTUK BERBAGAI KEAHLIAN !!</p>
                    </div>
                    <div className="row px-4 border-dark">
                        <div className="col-md-6">
                            <h2>PROJECT</h2>
                            {this.state.allpost.map((post) => {
                                return(
                                    <WorkerCard
                                        key={post.id}
                                        imgpath="/assets/icon.svg"
                                        title={post.header_post}
                                        desc={post.isi_post}
                                    />
                                )
                            })}
                        </div>
                        <div className="col-md-6">
                            <h2>SERVICES</h2>
                            {this.state.allpost.map((post) => {
                                return(
                                    <WorkerCard
                                        key={post.id}
                                        imgpath="/assets/icon.svg"
                                        title={post.header_post}
                                        desc={post.isi_post}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default ListWorkers;
