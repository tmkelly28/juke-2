import {Song} from './song.interface.js';
import {Album} from './album.interface.js';

export interface Artist {
	_id: string;
	name: string;
	albums: Album[];
	songs: Song[];
}