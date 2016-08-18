import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
	template: `
		<div>
			<h4>SONGS</h4>
			<table class='table'>
				<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Artists</th>
						<th>Genres</th>
					</tr>
				</thead>
				<tbody>
					<tr *ngFor="song of artist.songs" [ngClass]="{active: isCurrent(song)}">
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
export class ArtistSongsComponent {}