import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ReedLater } from "../components/ReedLater.jsx";
import { General } from "../components/General.jsx";
import { Card } from "../components/Card.jsx";
import { useNavigate } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate()

	async function getAlldata(group) {
		const url = "https://swapi.tech/api/" + group
		try {
			const response = await fetch(url)
			if (response.status != 200) {
				alert("Error, server not respond")
				return null
			}
			const body = await response.json()
			return body.results
		} catch (error) {
			console.log("Error", error)
			return null
		}
	}


	useEffect(() => {
		async function loadAllData() {
			// Se recomienda usar Promise.all para cargar todo a la vez
			const [peopleData, vehicleData, planetData] = await Promise.all([
				getAlldata("people"),
				getAlldata("vehicles"),
				getAlldata("planets"),
			]);

			// En lugar de actualizar estados locales, actualizamos el store global con un DISPATCH.
			// Asume que tu reducer tiene un action type como "SET_ALL_DATA".
			dispatch({
				type: "SET_ALL_DATA",
				payload: {
					people: peopleData || [],
					vehicles: vehicleData || [],
					planets: planetData || [],
				}
			});
		}
		loadAllData();
	}, []);

	return (

		<div className="container">
			<div>
				<nav>
					<div className="nav nav-tabs" id="nav-tab" role="tablist">
						<button
							className="nav-link active"
							id="nav-home-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-home"
							type="button"
							role="tab"
							aria-controls="nav-home"
							aria-selected="true"
						>
							Home
						</button>
						<button
							className="nav-link"
							id="nav-profile-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-profile"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
						>
							Reed later
						</button>
					</div>
				</nav>
				<div className="tab-content" id="nav-tabContent">
					<General
						favorites={store.favorites}
					/>
					<ReedLater />
				</div>
			</div>
		</div>

	)

}