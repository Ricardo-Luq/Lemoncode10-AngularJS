import { MovieApiService } from "./movie.service"
import { Movie } from "./movie-list.model";


class MovieController {
	movieList: Movie[] = [];

	constructor(private movieApiService: MovieApiService) {
		"ngInject";
		this.movieList = [];
	}

	$onInit() {
		this.movieApiService.getMoviesList().then(
			(result) => {
				this.movieList = result;
			}
		);
	};
}

export const MovieListComponent = {
	template: require("./movie-list.component.html") as string,
	controller: MovieController,
	controllerAs: "vm",
}

MovieController.$inject = ["movieApiService"];