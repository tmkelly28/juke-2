import {Injectable} from 'angular2/core';

@Injectable()
export class PlayerService {
	private audio;
	private isPlaying: boolean
	private currentSongList;
	private currentSong;
	private progress: number;

	constructor () {
		this.audio = document.createElement('audio');
		this.isPlaying = false;
		this.currentSong = null;
		this.progress = 0;

		this.audio.addEventListener('timeupdate', () => this.progress = this.audio.currentTime / this.audio.duration);
		this.audio.addEventListener('ended', () => this.next());
	}

	private _load (song, songList): void {
		this.audio.src = song.audioUrl;
		this.audio.load();
		this.currentSong = song;
		this.currentSongList = songList;
		this.progress = 0;
	}

	private _moveTo (index): void {
		index += this.currentSongList.length
		index %= this.currentSongList.length;
		this.start(this.currentSongList[index]);
	}

	getCurrentSong (): any { return this.currentSong; }

	getProgress (): number { return this.progress; }

	isPlaying (): boolean { return this.isPlaying; }

	pause (): void {
		this.audio.pause();
		this.isPlaying = false;
	}

	resume (): void {
		this.audio.play();
		this.isPlaying = true;
	}

	start (song, songList): void {
		songList = songList || this.currentSongList;
		this.pause();
		this._load(song, songList);
		this.resume();
	}

	next (): void {
		let index = this.currentSongList.indexOf(this.currentSong);
		this._moveTo(index + 1);
	}

	previous (): void {
		let index = currentSongList.indexOf(this.currentSong);
		this._moveTo(index - 1);
	}

}