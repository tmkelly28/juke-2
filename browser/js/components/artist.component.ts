import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams, CanActivate, OnActivate} from 'angular2/router';

import {appInjector} from '../app-injector.js';
import {ArtistService} from '../services/artist.service.js';
import {Artist} from '../interfaces/artist.interface.js';

@Component({
	template: `
		<div>
			<h3>{{ artist.name }}</h3>
			<ul class="nav nav-tabs">
				<li>
					<a [routerLink]="['ArtistAlbums', { artistId: artist._id }]">ALBUMS</a>
				</li>
				<li>
					<a [routerLink]="['ArtistSongs', { artistId: artist._id }]">SONGS</a>
				</li>
			</ul>
			<router-outlet></router-outlet>
		</div>
	`,
	directives: [ROUTER_DIRECTIVES]
})
@CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
  const injector: Injector = appInjector(),
    _artistService: ArtistService = injector.get(ArtistService),
    artistId: string = next.params.artistId;

  _artistService.fetchById(artistId)
    .toPromise()
    .then(artist => {
      next.params.artist = artist;
      return true;
    })
    .catch(err => {
      next.params.err = err
      return true;
    });
})
export class ArtistComponent implements OnActivate {

	private _artistId: string;
	public artist: Artist;
	public errorMessage: string;

	constructor () {}

	OnActivate (next) {
    this.artist = next.params.artist;
    this.errorMessage = next.params.err;
	}
}
