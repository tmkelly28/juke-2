import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {RouteParams} from 'angular2/router';

import {AlbumService} from '../services/album.service.js';
import {PlayerService} from '../services/player.service.js';
import {Album} from '../interfaces/album.interface.js';

@Component({
	template: `
		<div class="album">
			
			<h3>
				{{ album.name }} 
				<a href="{{ generateMailTo() }}">
					<button class="btn btn-default btn-sm">
						<span class="glyphicon glyphicon-share"></span>
					</button>
				</a>
			</h3>
			<img [src]="album.imageUrl" class="img-thumbnail" />
			
			<table class="table">
				<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Artists</th>
						<th>Genres</th>
					</tr>
				</thead>
				<tbody>
					<tr *ngFor="#song of album.songs" [ngClass]="{active: isCurrent(song)}">
						<td>
							<button *ngIf="!isCurrent(song)" (click)="start(song)" class="btn btn-default btn-xs">
								<span class="glyphicon glyphicon-play"></span>
							</button>
						</td>
						<td>{{ song.name }}</td>
						<td><span *ngFor="#artist of song.artists">{{ artist.name }} </span></td>
						<td>{{ song.genres.join(', ') }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	`,
	directives: [NgClass]

})
export class AlbumComponent implements OnInit {

	private _albumId: string;
	public album: Album;
	public errorMessage: string;

	constructor (
		private _albumService: AlbumService,
		private _playerService: PlayerService,
		routeParams: RouteParams 
	) {
		this._albumId = routeParams.get('albumId');
	}

	ngOnInit () { this.getAlbum(); }

	getAlbum () {
		return this._albumService.fetchById(this._albumId)
			.subscribe(
				album => this.album = album,
				error => this.errorMessage = <any>error
			)
	}

	isCurrent (song): boolean {
		let current = this._playerService.getCurrentSong();
		return current && current._id == song._id;
	}

	start (song): void {
		this._playerService.start(song, this.album.songs);
	}

	generateMailTo (): string {
		if (!this.album) return;
		let link = 'Check out this groovy album: http://localhost:1337/#/albums/' + this.album._id;
		return 'mailto:?subject=' + this.album.name + '&body=' + link;
	}
	
}

