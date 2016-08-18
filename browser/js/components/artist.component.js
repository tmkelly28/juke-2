System.register(['angular2/core', 'angular2/router', '../app-injector.js', '../services/artist.service.js'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, app_injector_js_1, artist_service_js_1;
    var ArtistComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (app_injector_js_1_1) {
                app_injector_js_1 = app_injector_js_1_1;
            },
            function (artist_service_js_1_1) {
                artist_service_js_1 = artist_service_js_1_1;
            }],
        execute: function() {
            ArtistComponent = (function () {
                function ArtistComponent() {
                }
                ArtistComponent.prototype.OnActivate = function (next) {
                    this.artist = next.params.artist;
                    this.errorMessage = next.params.err;
                };
                ArtistComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<div>\n\t\t\t<h3>{{ artist.name }}</h3>\n\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t<li>\n\t\t\t\t\t<a [routerLink]=\"['ArtistAlbums', { artistId: artist._id }]\">ALBUMS</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a [routerLink]=\"['ArtistSongs', { artistId: artist._id }]\">SONGS</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_2.CanActivate(function (next, previous) {
                        var injector = app_injector_js_1.appInjector(), _artistService = injector.get(artist_service_js_1.ArtistService), artistId = next.params.artistId;
                        _artistService.fetchById(artistId)
                            .toPromise()
                            .then(function (artist) {
                            next.params.artist = artist;
                            return true;
                        })
                            .catch(function (err) {
                            next.params.err = err;
                            return true;
                        });
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArtistComponent);
                return ArtistComponent;
            })();
            exports_1("ArtistComponent", ArtistComponent);
        }
    }
});
//# sourceMappingURL=artist.component.js.map