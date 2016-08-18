System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', './song.service.js', './album.service.js'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1, song_service_js_1, album_service_js_1;
    var ArtistService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (song_service_js_1_1) {
                song_service_js_1 = song_service_js_1_1;
            },
            function (album_service_js_1_1) {
                album_service_js_1 = album_service_js_1_1;
            }],
        execute: function() {
            ArtistService = (function () {
                function ArtistService(http, _songService, _albumService) {
                    this.http = http;
                    this._songService = _songService;
                    this._albumService = _albumService;
                }
                ArtistService.prototype.fetchAll = function () {
                    return this.http.get('/api/artists')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArtistService.prototype.fetchById = function (id) {
                    var _this = this;
                    var url = "/api/artists/" + id;
                    return Rx_1.Observable.forkJoin(this.http.get(url), this.http.get(url + "/songs"), this.http.get(url + "/albums"), function (artist, songs, albums) {
                        var _artist = artist.json(), _songs = songs.json().map(_this._songService.convert), _albums = albums.json().map(_this._albumService.convert);
                        _artist.songs = _songs;
                        _artist.albums = _albums;
                        return _artist;
                    })
                        .catch(this.handleError);
                };
                ArtistService.prototype.handleError = function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                ArtistService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, (typeof (_a = typeof song_service_js_1.SongService !== 'undefined' && song_service_js_1.SongService) === 'function' && _a) || Object, (typeof (_b = typeof album_service_js_1.AlbumService !== 'undefined' && album_service_js_1.AlbumService) === 'function' && _b) || Object])
                ], ArtistService);
                return ArtistService;
                var _a, _b;
            })();
            exports_1("ArtistService", ArtistService);
        }
    }
});
//# sourceMappingURL=artist.service.js.map