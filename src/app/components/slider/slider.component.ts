import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Modules/Movie';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss'],
	animations: [
		trigger('slidefade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('600ms')])])
	]
})
export class SliderComponent implements OnInit {
	@Input() TM_items: Movie[] = [];
	CurrentSlideIndex: number = 0;
	constructor() {}

	ngOnInit(): void {
		setInterval(() => {
			return (this.CurrentSlideIndex = ++this.CurrentSlideIndex % this.TM_items.length);
		}, 5000);
	}
}
