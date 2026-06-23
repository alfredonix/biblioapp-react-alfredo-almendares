import React from "react";
import "./LibroCard.css";

export default function LibroCard({ libro }) {
	if (!libro) return null;

	const { titulo, autores, editorial, anio, estado, resumen, esNovedad } = libro;
	const estadoClass = "estado--" + (estado ? estado.toLowerCase().replace(/\s+/g, "-") : "desconocido");

	return (
		<article className="libro-card">
			<header className="libro-header">
				<h3 className="titulo">{titulo}</h3>
				<div className="header-right">
					{esNovedad && <span className="novedad-badge">Nuevo</span>}
					<span className={`badge ${estadoClass}`}>{estado}</span>
				</div>
			</header>

			<div className="meta">
				<div className="meta-item"><strong>Autores:</strong> {autores && autores.join(", ")}</div>
				<div className="meta-item"><strong>Editorial:</strong> {editorial}</div>
				<div className="meta-item"><strong>Año:</strong> {anio}</div>
			</div>

			<p className="resumen">{resumen}</p>
		</article>
	);
}
