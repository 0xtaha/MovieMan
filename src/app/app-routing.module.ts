import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'Movies',
		component: MoviesComponent
	},
	{
		path: 'TVShows',
		component: TvshowsComponent
	},
	{
		path: 'Genres',
		component: GenresComponent
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
