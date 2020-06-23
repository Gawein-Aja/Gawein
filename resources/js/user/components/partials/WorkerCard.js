import React from 'react';

function WorkerCard(props) {
    let { imgpath, title, desc } = props;
    return (
        <div className="col-lg-2 col-6 mb-4">
            <div className="card h-100">
                <a href="#"><img className="card-img-top shadow" src={imgpath} alt="" /></a>
                <div className="card-body border p-3">
                    <h5 className="card-title">
                        <a className="text-secondary" href="#"><strong>{title}</strong></a>
                    </h5>
                    <p className="card-text"><small>{desc}</small></p>
                </div>
            </div>
        </div>
    );
}

export default WorkerCard;
