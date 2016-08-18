import {Injectable} from 'angular2/core';

@Injectable()
export class SongService {

	constructor () {}

	convert (raw, artistObjs) {
		if (typeof artistObjs == 'object') {
			let artistsById = _.indexBy(artistObjs, '_id');
			raw.artists = raw.artists.map(function (artistId) {
				return artistsById[artistId];
			});
		}
		raw.audioUrl = `/api/songs/${raw._id}.audio`;
		return raw;
	};
}