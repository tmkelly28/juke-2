import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {AlbumService} from '../services/album.service.js';
import {Album} from '../interfaces/album.interface.js';

@Component({
	template: `
		<div>
			<h3>Albums</h3>
			<div class="row">
				<div *ngFor="#album of albums" class="col-xs-4">
					<div class="thumbnail">
						<img [src]="album.imageUrl">
						<div class="caption">
							<h5>
								<a [routerLink]="['Album', {albumId: album._id}]">{{ album.name }}</a>
							</h5>
							<small>{{ album.songs.length }} songs</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
	directives: [ROUTER_DIRECTIVES],
	providers: [AlbumService]
})
export class AlbumsComponent implements OnInit {
	albums: Album[];
	errorMessage: string;

	constructor (private _albumService: AlbumService) {}
	ngOnInit () { this.getAlbums(); }
	getAlbums () {
		this._albumService.fetchAll()
			.subscribe(
				albums => this.albums = albums,
				error =>  this.errorMessage = <any>error
			)
	}
}