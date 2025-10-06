import React from "react";
import { Card } from "./Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export function General({ favorites }) {

    const { store } = useGlobalReducer()
    const { people, vehicles, planets } = store.data

    return (
        <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex={0}
        >
            <Card title="Characters" data={people}  favorites={favorites} itemType="people"/>
            <Card title="Planets" data={planets}  favorites={favorites} itemType="planets"/>
            <Card title="Vehicles" data={vehicles}  favorites={favorites} itemType="vehicles"/>
        </div>
    )
}