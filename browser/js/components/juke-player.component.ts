import {Component} from 'angular2/core';
import {NgStyle} from 'angular2/common';

import {PlayerService} from '../services/player.service.js';

@Component({
	selector: 'juke-player',
	template: `
		<div *ngIf="getCurrentSong()">
			<div class="pull-left">
				<button (click)="back()" class="btn btn-default">
					<span class="glyphicon glyphicon-step-backward"></span>
				</button>
				<button (click)="toggle()" class="btn btn-default">
					<span *ngIf="!isPlaying()" class="glyphicon glyphicon-play"></span>
					<span *ngIf="isPlaying()" class="glyphicon glyphicon-pause"></span>
				</button>
				<button (click)="forward()" class="btn btn-default">
					<span class="glyphicon glyphicon-step-forward"></span>
				</button>
			</div>
			<div class="bar">
				<div class="progress">
					<div class="progress-bar" [ngStyle]="{width: getPercent()}"></div>
				</div>
			</div>
		</div>
	`,
	providers: [PlayerService]
})
export class JukePlayerComponent {

	constructor (private _playerService: PlayerService) {}

	getCurrentSong () { this._playerService.getCurrentSong(); }
	isPlaying () { this._playerService.isPlaying(); }
	forward () { this._playerService.next(); }
	back () { this._playerService.previous(); }
	getPercent () { return (100 * this._playerService.getProgress()) + '%'; }
	toggle () { this._playerService.isPlaying() ? this._playerService.pause() : this._playerService.resume(); }
}