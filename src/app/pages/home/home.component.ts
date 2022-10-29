import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	TM_Data: any = [];
	constructor(private moviesService: MoviesService) {}

	ngOnInit(): void {
		this.moviesService.getMovies().subscribe((response: any) => {
			this.TM_Data = response.results;
		});
	}
}
