import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AudioProvider } from 'ionic-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedTrack: any;
  myTracks: any[];
  allTracks: any[];

  constructor(public navCtrl: NavController, private _audioProvider: AudioProvider) {

    // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
    this.myTracks = [{
      src: 'https://archive.org/download/AerosmithLivinOnTheEdge/Aerosmith%20-%20Livin%27%20On%20The%20Edge.mp3',
      artist: 'Aerosmith',
      title: 'Living On The Edge',
      art: 'http://hojeemdia.com.br/polopoly_fs/1.559633!/image/image.jpg_gen/derivatives/landscape_653/image.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
      artist: 'John Mayer',
      title: 'Who Says',
      art: 'img/johnmayer.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    }];

  }

  ngAfterContentInit() {     
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks; 
  }
  
  playSelectedTrack() {
    // use AudioProvider to control selected track 
    this._audioProvider.play(this.selectedTrack);
  }
  
  pauseSelectedTrack() {
     // use AudioProvider to control selected track 
     this._audioProvider.pause(this.selectedTrack);
  }
         
  onTrackFinished(track: any) {
    console.log('Track finished', track)
  } 

}
