System.register(['angular2/core', 'angular2/router', './albums.component.js', './artists.component.js', './album.component.js', './artist.component.js', './artist-albums.component.js', './artist-songs.component.js', './juke-player.component.js', '../services/artist.service.js', '../services/album.service.js', '../services/song.service.js', '../services/player.service.js'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, albums_component_js_1, artists_component_js_1, album_component_js_1, artist_component_js_1, artist_albums_component_js_1, artist_songs_component_js_1, juke_player_component_js_1, artist_service_js_1, album_service_js_1, song_service_js_1, player_service_js_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (albums_component_js_1_1) {
                albums_component_js_1 = albums_component_js_1_1;
            },
            function (artists_component_js_1_1) {
                artists_component_js_1 = artists_component_js_1_1;
            },
            function (album_component_js_1_1) {
                album_component_js_1 = album_component_js_1_1;
            },
            function (artist_component_js_1_1) {
                artist_component_js_1 = artist_component_js_1_1;
            },
            function (artist_albums_component_js_1_1) {
                artist_albums_component_js_1 = artist_albums_component_js_1_1;
            },
            function (artist_songs_component_js_1_1) {
                artist_songs_component_js_1 = artist_songs_component_js_1_1;
            },
            function (juke_player_component_js_1_1) {
                juke_player_component_js_1 = juke_player_component_js_1_1;
            },
            function (artist_service_js_1_1) {
                artist_service_js_1 = artist_service_js_1_1;
            },
            function (album_service_js_1_1) {
                album_service_js_1 = album_service_js_1_1;
            },
            function (song_service_js_1_1) {
                song_service_js_1 = song_service_js_1_1;
            },
            function (player_service_js_1_1) {
                player_service_js_1 = player_service_js_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n\t\t<div class=\"fluid-container\">\n\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t<sidebar>\n\t\t\t\t\t<section>\n\t\t\t\t\t\t<h5 class=\"playlist-item\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['Albums']\">ALBUMS</a>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</section>\n\t\t\t\t\t<section>\n\t\t\t\t\t\t<h5 class=\"playlist-item\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['Artists']\">ARTISTS</a>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</section>\n\t\t\t\t</sidebar>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-xs-10\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\n\t\t\t<footer>\n\t\t\t\t<juke-player></juke-player>\n\t\t\t</footer>\n\t\t</div>\n\t",
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            juke_player_component_js_1.JukePlayerComponent
                        ],
                        providers: [
                            album_service_js_1.AlbumService,
                            song_service_js_1.SongService,
                            artist_service_js_1.ArtistService,
                            player_service_js_1.PlayerService
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/albums', name: 'Albums', component: albums_component_js_1.AlbumsComponent },
                        { path: '/albums/:albumId', name: 'Album', component: album_component_js_1.AlbumComponent },
                        { path: '/artists', name: 'Artists', component: artists_component_js_1.ArtistsComponent },
                        { path: '/artists/:artistId', name: 'Artist', component: artist_component_js_1.ArtistComponent },
                        { path: '/artists/:artistId/albums', name: 'ArtistAlbums', component: artist_albums_component_js_1.ArtistAlbumsComponent },
                        { path: '/artists/:artistId/songs', name: 'ArtistSongs', component: artist_songs_component_js_1.ArtistSongsComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map