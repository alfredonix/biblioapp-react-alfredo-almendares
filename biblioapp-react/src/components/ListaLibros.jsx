import React from "react";
import { libros as todosLibros } from "../data/libros";
import LibroCard from "./LibroCard";

export default function ListaLibros({ libros }) {
	const list = libros ?? todosLibros;

	return (
		<section>
			{list.map((libro) => (
				<LibroCard key={libro.id} libro={libro} />
			))}
		</section>
	);
}
