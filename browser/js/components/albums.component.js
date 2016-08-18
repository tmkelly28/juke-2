System.register(['angular2/core', 'angular2/router', '../services/album.service.js'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, album_service_js_1;
    var AlbumsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (album_service_js_1_1) {
                album_service_js_1 = album_service_js_1_1;
            }],
        execute: function() {
            AlbumsComponent = (function () {
                function AlbumsComponent(_albumService) {
                    this._albumService = _albumService;
                }
                AlbumsComponent.prototype.ngOnInit = function () { this.getAlbums(); };
                AlbumsComponent.prototype.getAlbums = function () {
                    var _this = this;
                    this._albumService.fetchAll()
                        .subscribe(function (albums) { return _this.albums = albums; }, function (error) { return _this.errorMessage = error; });
                };
                AlbumsComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<div>\n\t\t\t<h3>Albums</h3>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div *ngFor=\"#album of albums\" class=\"col-xs-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img [src]=\"album.imageUrl\">\n\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['Album', {albumId: album._id}]\">{{ album.name }}</a>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<small>{{ album.songs.length }} songs</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [album_service_js_1.AlbumService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof album_service_js_1.AlbumService !== 'undefined' && album_service_js_1.AlbumService) === 'function' && _a) || Object])
                ], AlbumsComponent);
                return AlbumsComponent;
                var _a;
            })();
            exports_1("AlbumsComponent", AlbumsComponent);
        }
    }
});
//# sourceMappingURL=albums.component.js.map