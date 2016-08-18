import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AlbumsComponent} from './albums.component.js'
import {ArtistsComponent} from './artists.component.js';
import {AlbumComponent} from './album.component.js';
import {ArtistComponent} from './artist.component.js';
import {ArtistAlbumsComponent} from './artist-albums.component.js';
import {ArtistSongsComponent} from './artist-songs.component.js';
import {JukePlayerComponent} from './juke-player.component.js';

import {ArtistService} from '../services/artist.service.js';
import {AlbumService} from '../services/album.service.js';
import {SongService} from '../services/song.service.js';
import {PlayerService} from '../services/player.service.js';

@Component({
	selector: 'app',
	template: `
		<div class="fluid-container">
			<div class="col-xs-2">
				<sidebar>
					<section>
						<h5 class="playlist-item">
							<a [routerLink]="['Albums']">ALBUMS</a>
						</h5>
					</section>
					<section>
						<h5 class="playlist-item">
							<a [routerLink]="['Artists']">ARTISTS</a>
						</h5>
					</section>
				</sidebar>
			</div>

			<div class="col-xs-10">
				<router-outlet></router-outlet>
			</div>

			<footer>
				<juke-player></juke-player>
			</footer>
		</div>
	`,
	directives: [
		ROUTER_DIRECTIVES, 
		JukePlayerComponent
	],
	providers: [
		AlbumService, 
		SongService, 
		ArtistService, 
		PlayerService
	]
})
@RouteConfig([
	{path: '/albums', name: 'Albums', component: AlbumsComponent},
	{path: '/albums/:albumId', name: 'Album', component: AlbumComponent},
	{path: '/artists', name: 'Artists', component: ArtistsComponent},
	{path: '/artists/:artistId', name: 'Artist', component: ArtistComponent},
	{path: '/artists/:artistId/albums', name: 'ArtistAlbums', component: ArtistAlbumsComponent},
	{path: '/artists/:artistId/songs', name: 'ArtistSongs', component: ArtistSongsComponent}
])
export class AppComponent {}
