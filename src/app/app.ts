import * as angular from "angular";
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { MovieListComponent } from "./pages/movie-list/movie-list.component";
import { MovieListResultComponent } from "./pages/movie-list/result/movie-list-result.component";
import { MovieListCardComponent } from "./pages/movie-list/card/movie-list-card.component";
import { MovieApiService } from "./pages/movie-list/movie.service";
import { MovieListEditComponent } from "./pages/movie-list/edit/movie-list.edit.component";

angular
	.module("app", ["ui.router", "toastr", "ngMessages"])
	.config(routing)
	.component("app", AppComponent)
	.component("movielist", MovieListComponent)
	.component("movielistresult", MovieListResultComponent)
	.component("movielistcard", MovieListCardComponent)
	.component("movielistedit", MovieListEditComponent)
	.service("movieApiService", MovieApiService)
	;