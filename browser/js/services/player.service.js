System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PlayerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PlayerService = (function () {
                function PlayerService() {
                    var _this = this;
                    this.audio = document.createElement('audio');
                    this.isPlaying = false;
                    this.currentSong = null;
                    this.progress = 0;
                    this.audio.addEventListener('timeupdate', function () { return _this.progress = _this.audio.currentTime / _this.audio.duration; });
                    this.audio.addEventListener('ended', function () { return _this.next(); });
                }
                PlayerService.prototype._load = function (song, songList) {
                    this.audio.src = song.audioUrl;
                    this.audio.load();
                    this.currentSong = song;
                    this.currentSongList = songList;
                    this.progress = 0;
                };
                PlayerService.prototype._moveTo = function (index) {
                    index += this.currentSongList.length;
                    index %= this.currentSongList.length;
                    this.start(this.currentSongList[index]);
                };
                PlayerService.prototype.getCurrentSong = function () { return this.currentSong; };
                PlayerService.prototype.getProgress = function () { return this.progress; };
                PlayerService.prototype.isPlaying = function () { return this.isPlaying; };
                PlayerService.prototype.pause = function () {
                    this.audio.pause();
                    this.isPlaying = false;
                };
                PlayerService.prototype.resume = function () {
                    this.audio.play();
                    this.isPlaying = true;
                };
                PlayerService.prototype.start = function (song, songList) {
                    songList = songList || this.currentSongList;
                    this.pause();
                    this._load(song, songList);
                    this.resume();
                };
                PlayerService.prototype.next = function () {
                    var index = this.currentSongList.indexOf(this.currentSong);
                    this._moveTo(index + 1);
                };
                PlayerService.prototype.previous = function () {
                    var index = currentSongList.indexOf(this.currentSong);
                    this._moveTo(index - 1);
                };
                PlayerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PlayerService);
                return PlayerService;
            })();
            exports_1("PlayerService", PlayerService);
        }
    }
});
//# sourceMappingURL=player.service.js.map