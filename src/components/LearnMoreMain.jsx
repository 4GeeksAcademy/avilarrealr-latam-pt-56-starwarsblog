import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export function LearnMoreMain () {

    const { store } = useGlobalReducer()
    const detail = store.detail.properties


    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <img
                    src="https://placehold.co/600x400"
                    className="img-fluid"
                    alt="img-600x400"
                />
            </div>

            <div className="col-6">
                <p className="fs-1 fw-bold">
                    {detail.name}
                </p>
            </div>
        </div>
    )
}