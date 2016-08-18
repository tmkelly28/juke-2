System.register(['angular2/core', 'angular2/router', '../services/artist.service.js'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, artist_service_js_1;
    var ArtistsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (artist_service_js_1_1) {
                artist_service_js_1 = artist_service_js_1_1;
            }],
        execute: function() {
            ArtistsComponent = (function () {
                function ArtistsComponent(_artistService) {
                    this._artistService = _artistService;
                    this.getArtists();
                }
                ArtistsComponent.prototype.getArtists = function () {
                    var _this = this;
                    this._artistService.fetchAll()
                        .subscribe(function (artists) { return _this.artists = artists; }, function (error) { return _this.errorMessage = error; });
                };
                ArtistsComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<div>\n\t\t\t<h3>Artists</h3>\n\t\t\t<div class=\"list-group\">\n\t\t\t\t<div class=\"list-group-item\" *ngFor=\"#artist of artists\">\n\t\t\t\t\t<a [routerLink]=\"['Artist', {artistId: artist._id}]\">{{ artist.name }}</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof artist_service_js_1.ArtistService !== 'undefined' && artist_service_js_1.ArtistService) === 'function' && _a) || Object])
                ], ArtistsComponent);
                return ArtistsComponent;
                var _a;
            })();
            exports_1("ArtistsComponent", ArtistsComponent);
        }
    }
});
//# sourceMappingURL=artists.component.js.map