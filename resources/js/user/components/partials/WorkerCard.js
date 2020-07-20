import React, { useRef, useLayoutEffect, useState } from "react";

function WorkerCard(props) {
    const targetRef = useRef(null);
    const [size, setSize] = useState(0);

    useLayoutEffect(() => {
        if (targetRef.current) {
            setSize(targetRef.current.offsetWidth);
        }
    }, []);

    let { imgpath, title, desc } = props;
    return (
        <div className="col-lg-3 col-6 mb-4">
            <div className="card h-100">
                <a
                    className="card-img-top"
                    href="#"
                    style={{
                        background:
                            "url(" +
                            (imgpath == ""
                                ? "/assets/image_not_found.png"
                                : imgpath) +
                            ") 50% 50% no-repeat",
                        height: `${size}px`,
                        backgroundSize: "auto 100%"
                    }}
                >
                    <img
                        ref={targetRef}
                        height="0"
                        width="100%"
                        src={
                            imgpath == ""
                                ? "/assets/image_not_found.png"
                                : imgpath
                        }
                        alt=""
                    />
                </a>
                <div className="card-body border p-md-3 p-2">
                    <h5 className="card-title">
                        <a className="text-secondary" href="#">
                            <strong>{title}</strong>
                        </a>
                    </h5>
                    <div className="card-text">
                        <p
                            style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                marginBottom: 0,
                                marginBlockEnd: 0
                            }}
                            dangerouslySetInnerHTML={{
                                __html: desc
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkerCard;
