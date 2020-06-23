import React from 'react';

function WorkerCard(props) {
    let { imgpath, title, desc } = props;
    return (
        <div className="my-2 p-3">
            <div className="row worker-card">
                <div className="col-sm-2 worker-img">
                    <img src={imgpath} className="img-fluid d-block" />
                </div>
                <div className="col-sm-10">
                    <h4 className="worker-title">
                        <a>{title}</a>
                    </h4>
                    <p className="worker-desc">{desc}</p>
                </div>
            </div>
        </div>
    );
}

export default WorkerCard;
