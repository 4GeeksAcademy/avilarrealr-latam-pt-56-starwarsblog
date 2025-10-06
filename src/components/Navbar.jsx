import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store } = useGlobalReducer()
	const favoritesCount = store.favorites ? store.favorites.length : 0

	return (
		<nav className="navbar navbar-light bg-light mb-5">
			<div className="container">
				<Link to="/">
					<i className="display-1 fa-brands fa-galactic-senate text-dark"></i>
				</Link>
				<div className="ml-auto d-flex gap-3">
					{/* Button trigger modal */}
					<button
						type="button"
						className="btn btn-dark"
						data-bs-toggle="modal"
						data-bs-target="#exampleModal"
					>
						Favorites
						<span className="badge bg-danger ms-2">
							{favoritesCount}
						</span>
					</button>
					<Modal />
					{/* Barra para buscar */}
					<form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-dark" type="submit">
							Search
						</button>
					</form>

				</div>
			</div>
		</nav>
	);
};