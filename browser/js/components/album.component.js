System.register(['angular2/core', 'angular2/common', 'angular2/router', '../services/album.service.js', '../services/player.service.js'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, album_service_js_1, player_service_js_1;
    var AlbumComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (album_service_js_1_1) {
                album_service_js_1 = album_service_js_1_1;
            },
            function (player_service_js_1_1) {
                player_service_js_1 = player_service_js_1_1;
            }],
        execute: function() {
            AlbumComponent = (function () {
                function AlbumComponent(_albumService, _playerService, routeParams) {
                    this._albumService = _albumService;
                    this._playerService = _playerService;
                    this._albumId = routeParams.get('albumId');
                }
                AlbumComponent.prototype.ngOnInit = function () { this.getAlbum(); };
                AlbumComponent.prototype.getAlbum = function () {
                    var _this = this;
                    return this._albumService.fetchById(this._albumId)
                        .subscribe(function (album) { return _this.album = album; }, function (error) { return _this.errorMessage = error; });
                };
                AlbumComponent.prototype.isCurrent = function (song) {
                    var current = this._playerService.getCurrentSong();
                    return current && current._id == song._id;
                };
                AlbumComponent.prototype.start = function (song) {
                    this._playerService.start(song, this.album.songs);
                };
                AlbumComponent.prototype.generateMailTo = function () {
                    if (!this.album)
                        return;
                    var link = 'Check out this groovy album: http://localhost:1337/#/albums/' + this.album._id;
                    return 'mailto:?subject=' + this.album.name + '&body=' + link;
                };
                AlbumComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<div class=\"album\">\n\t\t\t\n\t\t\t<h3>\n\t\t\t\t{{ album.name }} \n\t\t\t\t<a href=\"{{ generateMailTo() }}\">\n\t\t\t\t\t<button class=\"btn btn-default btn-sm\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-share\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t</a>\n\t\t\t</h3>\n\t\t\t<img [src]=\"album.imageUrl\" class=\"img-thumbnail\" />\n\t\t\t\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t<th>Artists</th>\n\t\t\t\t\t\t<th>Genres</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"#song of album.songs\" [ngClass]=\"{active: isCurrent(song)}\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<button *ngIf=\"!isCurrent(song)\" (click)=\"start(song)\" class=\"btn btn-default btn-xs\">\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-play\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>{{ song.name }}</td>\n\t\t\t\t\t\t<td><span *ngFor=\"#artist of song.artists\">{{ artist.name }} </span></td>\n\t\t\t\t\t\t<td>{{ song.genres.join(', ') }}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t",
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof album_service_js_1.AlbumService !== 'undefined' && album_service_js_1.AlbumService) === 'function' && _a) || Object, (typeof (_b = typeof player_service_js_1.PlayerService !== 'undefined' && player_service_js_1.PlayerService) === 'function' && _b) || Object, router_1.RouteParams])
                ], AlbumComponent);
                return AlbumComponent;
                var _a, _b;
            })();
            exports_1("AlbumComponent", AlbumComponent);
        }
    }
});
//# sourceMappingURL=album.component.js.map