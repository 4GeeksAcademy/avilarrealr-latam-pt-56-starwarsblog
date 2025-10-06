import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

export function LearnMoreFooter() {

    const { store } = useGlobalReducer()
    const { group } = useParams()
    const detail = store.detail.properties

    const renderPeopleDetails = () => (
        <>
            <div className="col">
                <p className="fw-bold text-uppercase small">Gender</p>
                <p className="small">{detail.gender}</p>
            </div>
            <div className="col">
                <p className="fw-bold text-uppercase small">Skin color</p>
                <p className="small">{detail.skin_color}</p>
            </div>
            <div className="col">
                <p className="fw-bold text-uppercase small">Hair color</p>
                <p className="small">{detail.hair_color}</p>
            </div>
            <div className="col">
                <p className="fw-bold text-uppercase small">Height</p>
                <p className="small">{detail.height}</p>
            </div>
        </>
    );

    const renderPlanetDetails = () => (
        <>
            <div className="col">
                <p className="fw-bold text-uppercase small">Climate</p>
                <p className="small">{detail.climate}</p>
            </div>
            <div className="col">
                <p className="fw-bold text-uppercase small">Terrain</p>
                <p className="small">{detail.terrain}</p>
            </div>
            <div className="col">
                <p className="fw-bold text-uppercase small">Population</p>
                <p className="small">{detail.population}</p>
            </div>
            <div className="col">
                <p className="fw-bold text-uppercase small">Orbital Period</p>
                <p className="small">{detail.orbital_period}</p>
            </div>
            <div className="col">
                <p className="fw-bold text-uppercase small">Diameter</p>
                <p className="small">{detail.diameter}</p>
            </div>
        </>
    )

    const renderVehicleDetails = () => (
        <>
            <div className="col">
                <p className="fw-bold text-uppercase small">Model</p>
                <p className="small">{detail.model}</p>
            </div>
            <div className="col">
                <p className="fw-bold text-uppercase small">Manufacturer</p>
                <p className="small">{detail.manufacturer}</p>
            </div>
            <div className="col">
                <p className="fw-bold text-uppercase small">Crew</p>
                <p className="small">{detail.crew}</p>
            </div>
            <div className="col">
                <p className="fw-bold text-uppercase small">Cost</p>
                <p className="small">{detail.cost_in_credits}</p>
            </div>
            <div className="col">
                <p className="fw-bold text-uppercase small">Passengers</p>
                <p className="small">{detail.passengers}</p>
            </div>
            {/* Puedes agregar más campos de VEHICLES aquí (passengers, max_atmosphering_speed, etc.) */}
        </>
    )

    const renderDetails = () => {
        if (!detail || Object.keys(detail).length === 0) {
            return <div className="col-12 text-center text-muted">Cargando detalles...</div>;
        }

        switch (group) {
            case 'people':
                return renderPeopleDetails();
            case 'planets':
                return renderPlanetDetails();
            case 'vehicles':
                return renderVehicleDetails();
            default:
                return <div className="col-12 text-center text-danger">Tipo de recurso desconocido.</div>;
        }
    }

    return (
        <div className="row mt-5 border-top pt-4">
            {renderDetails()}
        </div>
    )
}