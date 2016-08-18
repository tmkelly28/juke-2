import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

import {SongService} from './song.service.js';

@Injectable()
export class AlbumService {

	constructor (private http: Http, private _songService: SongService) {}

	fetchAll () {
		return this.http.get('/api/albums')
			.map(res => res.json())
			.map(albums => albums.map(this.convert))
			.catch(this.handleError);
	}

	fetchById (id: string) {
		return this.http.get(`/api/albums/${id}`)
			.map(res => res.json())
			.map(album => this.convert(album))
			.do(album => console.log(album))
			.map(album => {
				// console.log(album.songs)
				album.songs = album.songs.map(s => _songService.convert(s, album.artists));
				// console.log('!')
				return album;
			})
			.catch(this.handleError);
	}

	convert (raw: any) {
		raw.imageUrl = '/api/albums/' + raw._id + '.image';
		return raw;
	}

	private handleError (error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
