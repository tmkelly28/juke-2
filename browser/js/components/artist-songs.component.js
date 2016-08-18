System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var ArtistSongsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ArtistSongsComponent = (function () {
                function ArtistSongsComponent() {
                }
                ArtistSongsComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<div>\n\t\t\t<h4>SONGS</h4>\n\t\t\t<table class='table'>\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t<th>Artists</th>\n\t\t\t\t\t\t<th>Genres</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"song of artist.songs\" [ngClass]=\"{active: isCurrent(song)}\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<button *ngIf=\"!isCurrent(song)\" (click)=\"start(song)\" class=\"btn btn-default btn-xs\">\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-play\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>{{ song.name }}</td>\n\t\t\t\t\t\t<td><span *ngFor=\"#artist of song.artists\">{{ artist.name }} </span></td>\n\t\t\t\t\t\t<td>{{ song.genres.join(', ') }}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t",
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArtistSongsComponent);
                return ArtistSongsComponent;
            })();
            exports_1("ArtistSongsComponent", ArtistSongsComponent);
        }
    }
});
//# sourceMappingURL=artist-songs.component.js.map