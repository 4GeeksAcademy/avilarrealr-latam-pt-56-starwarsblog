import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "../components/Card.jsx";

export function ReedLater() {

    const { store, dispatch } = useGlobalReducer()
    const bookedItems = store.bookeds
    const favorites = store.favorites

    const handleRemoveBooked = (item) => {
        dispatch({
            type: "TOGGLE_BOOKED",
            payload: item
        })
    }

    return (
        <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
        >
            <div className="row p-3">
                <div className="col">
                    <p className="fs-2 fw-bold">Booked items ({bookedItems.length})</p>

                    {
                        bookedItems.length === 0 ? (
                            <p className="p-4 text-center">No items to reed later.</p>
                        ) : (
                            <div className="d-flex flex-wrap overflow-auto">
                                {bookedItems.map((e) => {
                                    return (
                                        <div key={e.uid + e.type} className="mb-4 me-3">
                                            <Card
                                                title={e.type}
                                                data={[e]}
                                                favorites={favorites}
                                                itemType={e.type}
                                            />
                                            <button
                                                className="btn btn-sm btn-outline-danger w-100"
                                                onClick={() => handleRemoveBooked(e)}
                                            >
                                                <i className="fa-solid fa-trash me-2"></i>Delete
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}