import React from "react";
import "./FiltroEstado.css";

export default function FiltroEstado({ value = "Todos", onChange }) {
	const opciones = ["Todos", "Disponible", "Prestado", "Reservado"];

	return (
		<div className="filtro-estado">
			<div className="botones">
				{opciones.map((op) => (
					<button
						key={op}
						type="button"
						className={`filtro-btn ${value === op ? "active" : ""}`}
						onClick={() => onChange && onChange(op)}
					>
						{op}
					</button>
				))}
			</div>
		</div>
	);
}
