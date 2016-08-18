System.register(['angular2/core', '../services/player.service.js'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, player_service_js_1;
    var JukePlayerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_service_js_1_1) {
                player_service_js_1 = player_service_js_1_1;
            }],
        execute: function() {
            JukePlayerComponent = (function () {
                function JukePlayerComponent(_playerService) {
                    this._playerService = _playerService;
                }
                JukePlayerComponent.prototype.getCurrentSong = function () { this._playerService.getCurrentSong(); };
                JukePlayerComponent.prototype.isPlaying = function () { this._playerService.isPlaying(); };
                JukePlayerComponent.prototype.forward = function () { this._playerService.next(); };
                JukePlayerComponent.prototype.back = function () { this._playerService.previous(); };
                JukePlayerComponent.prototype.getPercent = function () { return (100 * this._playerService.getProgress()) + '%'; };
                JukePlayerComponent.prototype.toggle = function () { this._playerService.isPlaying() ? this._playerService.pause() : this._playerService.resume(); };
                JukePlayerComponent = __decorate([
                    core_1.Component({
                        selector: 'juke-player',
                        template: "\n\t\t<div *ngIf=\"getCurrentSong()\">\n\t\t\t<div class=\"pull-left\">\n\t\t\t\t<button (click)=\"back()\" class=\"btn btn-default\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-step-backward\"></span>\n\t\t\t\t</button>\n\t\t\t\t<button (click)=\"toggle()\" class=\"btn btn-default\">\n\t\t\t\t\t<span *ngIf=\"!isPlaying()\" class=\"glyphicon glyphicon-play\"></span>\n\t\t\t\t\t<span *ngIf=\"isPlaying()\" class=\"glyphicon glyphicon-pause\"></span>\n\t\t\t\t</button>\n\t\t\t\t<button (click)=\"forward()\" class=\"btn btn-default\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-step-forward\"></span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"bar\">\n\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t<div class=\"progress-bar\" [ngStyle]=\"{width: getPercent()}\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
                        providers: [player_service_js_1.PlayerService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof player_service_js_1.PlayerService !== 'undefined' && player_service_js_1.PlayerService) === 'function' && _a) || Object])
                ], JukePlayerComponent);
                return JukePlayerComponent;
                var _a;
            })();
            exports_1("JukePlayerComponent", JukePlayerComponent);
        }
    }
});
//# sourceMappingURL=juke-player.component.js.map