import {Component} from 'angular2/core';

@Component({
	template: `
		<div>
			<h4>ALBUMS</h4>
			<div class="row">
				<div *ngFor="#album of artist.albums" class="col-xs-4">
					<div class="thumbnail">
						<img [src]="{{ album.imageUrl }}">
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
	`
})
export class ArtistAlbumsComponent {}