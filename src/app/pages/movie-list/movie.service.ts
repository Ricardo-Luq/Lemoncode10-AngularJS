import * as angular from "angular";
import { Movie } from "./movie-list.model";

export class MovieApiService {
	$http: angular.IHttpService = null;
	constructor($http: angular.IHttpService, private $q: angular.IQService) {
		"ngInject";
		this.$http = $http;
	}

	public getMoviesList(): angular.IPromise<Movie[]> {
		const deferred = this.$q.defer<Movie[]>();

		this.$http.get('http://localhost:3000/movies').then(
			(result) => {
				const movies = result.data as Movie[];
				deferred.resolve(movies);
			}
		);

		return deferred.promise;
	}

	public updateMovie(mov: Movie): angular.IPromise<Movie> {
		const deferred = this.$q.defer<Movie>();
		let idMov = mov.id;

		this.$http.put('http://localhost:3000/movies/' + idMov, mov).then(
			(result) => {
				const movieInsert = result.data as Movie;
				deferred.resolve(movieInsert);
			}
		)
		return deferred.promise;
	}

	public insertMovie(mov: Movie): angular.IPromise<Movie> {
		const deferred = this.$q.defer<Movie>();

		this.$http.post('http://localhost:3000/movies/', mov).then(
			(result) => {
				const movieInsert = result.data as Movie;
				deferred.resolve(movieInsert);
			}
		)
		return deferred.promise;
	}

	public getMovieId(id: number): angular.IPromise<Movie> {
		const deferred = this.$q.defer<Movie>();

		this.$http.get('http://localhost:3000/movies/' + id).then(
			(result) => {
				const movies = result.data as Movie;
				deferred.resolve(movies);
			}
		);

		return deferred.promise;
	}

	public deleteMovie(id: number): angular.IPromise<Movie> {
		const deferred = this.$q.defer<Movie>();

		this.$http.delete('http://localhost:3000/movies/' + id).then(
			(result) => {
				const movies = result.data as Movie;
				deferred.resolve(movies);
			}
		);

		return deferred.promise;
	}
}

MovieApiService.$inject = ["$http", "$q"];