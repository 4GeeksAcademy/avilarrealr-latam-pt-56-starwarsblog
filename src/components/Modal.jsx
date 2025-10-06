import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export function Modal() {

    const { store, dispatch } = useGlobalReducer()
    const favorites = store.favorites

    const handleToggleFavorite = (item, type) => {
        dispatch({
            type: "TOGGLE_FAVORITE",
            payload: {
                ...item,
                type: type
            }
        });
    }

    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Favorites 
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        {
                            favorites.length === 0 ? (
                                <p className="p-4 text-center">No elements to list.</p>
                            ) : (
                                favorites.map((e) => {
                                    return (
                                        <div className="d-flex justify-content-between align-items-center p-4 border-bottom" key={e.uid + e.type}>
                                            <p className="m-0 fs-5">{e.name} <span className="badge bg-secondary mx-3">{e.type}</span></p>

                                            <i
                                                className="fa-solid fa-trash text-danger"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => handleToggleFavorite(e, e.type)}
                                            ></i>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}