import { Movie } from "../movie-list.model";
import { MovieApiService } from "../movie.service";
import { StateParams } from "@uirouter/angularjs";


export class MovieEditController {
	movie: Movie = new Movie("", "", "", 0);

	poster: string;
	name: string;
	year: number;
	director: string;
	
	constructor
	(
		private movieApiService: MovieApiService, 
		private stateParams: StateParams
	)
	{
		"ngInject";
		this.movie = null;
	}
	$onInit() {		
		if (this.stateParams.id != null)
		{
			this.movieApiService.getMovieId(this.stateParams.id).then(
				(result) => {
					this.movie = result;
				}
			)
		}
	}
	handleClick = (poster: string, name: string, year: number, director: string) => {
		
		if (this.stateParams.id != null)
		{
			this.movie = new Movie(this.poster, this.name, this.director, this.year);
			this.movie.id = this.stateParams.id;
			this.movieApiService.updateMovie(this.movie).then(
				(result) => {
					window.location.replace('http://localhost:8080/#!/home');
				}
			);
		}
		else
		{			
			this.movie = new Movie(this.poster, this.name, this.director, this.year);
			this.movieApiService.insertMovie(this.movie).then(
				(result) => {
					window.location.replace('http://localhost:8080/#!/home');
				}
			);
		}
	}
}

export const MovieListEditComponent = {
	template: require("./movie-list.edit.component.html") as string,
	controller: MovieEditController,
	controllerAs: "vm",
};

MovieEditController.$inject = ["movieApiService", "$stateParams"]