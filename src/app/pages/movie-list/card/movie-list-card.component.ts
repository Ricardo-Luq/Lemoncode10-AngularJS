import { MovieApiService } from "../movie.service";

export class MovieCardController {
	idMov: number;

	constructor (private movieApiService: MovieApiService)
	{
		"ngInject";
		this.idMov = 0;
	}
	eraseMovie = (id: number) => {
		this.idMov = id;
		this.movieApiService.deleteMovie(this.idMov).then(
			(result) => {
				window.location.reload();
			}
		)
	}
}

export const MovieListCardComponent = {
	bindings: {
		id: "<",
		poster: "<",
		name: "<",
		year: "<",
		director: "<"
	},
	template: require("./movie-list-card.component.html"),
	controller: MovieCardController,
	controllerAs: "vm",
};

MovieCardController.$inject = ["movieApiService"];