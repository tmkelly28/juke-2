import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

import {SongService} from './song.service.js';
import {AlbumService} from './album.service.js';

@Injectable()
export class ArtistService {

	constructor (
		private http: Http,
		private _songService: SongService,
		private _albumService: AlbumService
	) {}

	fetchAll () {
		return this.http.get('/api/artists')
			.map(res => res.json())
			.catch(this.handleError)
	}

	fetchById (id) {
		let url = `/api/artists/${id}`;

		return Observable.forkJoin(
			this.http.get(url), 
			this.http.get(`${url}/songs`), 
			this.http.get(`${url}/albums`),
			(artist, songs, albums) => {
				let _artist = artist.json(),
					_songs = songs.json().map(this._songService.convert),
					_albums = albums.json().map(this._albumService.convert);
				_artist.songs = _songs;
				_artist.albums = _albums;
				return _artist;
			})
			.catch(this.handleError);
	}

	private handleError (error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
