System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', './song.service.js'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1, song_service_js_1;
    var AlbumService;
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
            }],
        execute: function() {
            AlbumService = (function () {
                function AlbumService(http, _songService) {
                    this.http = http;
                    this._songService = _songService;
                }
                AlbumService.prototype.fetchAll = function () {
                    var _this = this;
                    return this.http.get('/api/albums')
                        .map(function (res) { return res.json(); })
                        .map(function (albums) { return albums.map(_this.convert); })
                        .catch(this.handleError);
                };
                AlbumService.prototype.fetchById = function (id) {
                    var _this = this;
                    return this.http.get("/api/albums/" + id)
                        .map(function (res) { return res.json(); })
                        .map(function (album) { return _this.convert(album); })
                        .do(function (album) { return console.log(album); })
                        .map(function (album) {
                        // console.log(album.songs)
                        album.songs = album.songs.map(function (s) { return _songService.convert(s, album.artists); });
                        // console.log('!')
                        return album;
                    })
                        .catch(this.handleError);
                };
                AlbumService.prototype.convert = function (raw) {
                    raw.imageUrl = '/api/albums/' + raw._id + '.image';
                    return raw;
                };
                AlbumService.prototype.handleError = function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                AlbumService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, (typeof (_a = typeof song_service_js_1.SongService !== 'undefined' && song_service_js_1.SongService) === 'function' && _a) || Object])
                ], AlbumService);
                return AlbumService;
                var _a;
            })();
            exports_1("AlbumService", AlbumService);
        }
    }
});
//# sourceMappingURL=album.service.js.map