import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {ArtistService} from '../services/artist.service.js';
import {Artist} from '../interfaces/artist.interface.js';

@Component({
	template: `
		<div>
			<h3>Artists</h3>
			<div class="list-group">
				<div class="list-group-item" *ngFor="#artist of artists">
					<a [routerLink]="['Artist', {artistId: artist._id}]">{{ artist.name }}</a>
				</div>
			</div>
		</div>
	`,
	directives: [ROUTER_DIRECTIVES]
})
export class ArtistsComponent {
	artists: Artist[];
	errorMessage: string;

	constructor (private _artistService: ArtistService) {
		this.getArtists();
	}
	getArtists () {
		this._artistService.fetchAll()
			.subscribe(
				artists => this.artists = artists,
				error => this.errorMessage = <any>error
			)
	}

}