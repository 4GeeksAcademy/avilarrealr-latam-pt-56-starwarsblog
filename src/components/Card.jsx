import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export function Card({ title, data, favorites, itemType }) {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()

    const handleToggleFavorite = (item, type) => {
        dispatch({
            type: "TOGGLE_FAVORITE",
            payload: {
                ...item,
                type: type
            }
        });
    }

    const handleToggleBooked = (item, type) => {
        dispatch({
            type: "TOGGLE_BOOKED",
            payload: {
                ...item,
                type: type
            }
        });
    }

    return (

        <div className="row">
            <div className="col">
                <p className="fs-2 fw-bold">{title}</p>
                <div className="d-flex overflow-auto">
                    {
                        (data || []).map((e) => {
                            const isFavorite = favorites.some(fav => fav.uid === e.uid && fav.type === itemType)
                            const isBooked = store.bookeds.some(book => book.uid === e.uid && book.type === itemType)
                            const group = `${(e.url).split("/")[4]}`
                            const id = `${(e.url).split("/")[5]}`
                            return (
                                <div className="card flex-shrink-0 me-3" key={e.uid} style={{ width: "18rem" }}>
                                    <img src="https://placehold.jp/400x200.png" className="card-img-top" alt="img-400x200" />
                                    <div className="card-body">
                                        <h5 className="fs-2 fw-lighter card-title">{e.name}</h5>
                                        <div className="d-flex justify-content-between align-items-center pt-4">
                                            <button className="btn btn-outline-primary" onClick={() => { navigate(`/learn-more/${group}/${id}`) }}>
                                                Learn more
                                            </button>
                                            <div className="fs-5 d-flex gap-3">
                                                <i className={`fa-${isFavorite ? 'solid' : 'regular'} fa-heart text-${isFavorite ? 'danger' : 'secondary'}`} style={{ cursor: "pointer" }} onClick={() => handleToggleFavorite(e, itemType)}></i>
                                                <i
                                                    className={`fa-${isBooked ? 'solid' : 'regular'} fa-bookmark text-${isBooked ? 'primary' : 'secondary'}`}
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => handleToggleBooked(e, itemType)}
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <hr className="w-100 border-1 my-5 border-dark opacity-25" />
            </div>
        </div>

    )

}