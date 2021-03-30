import { Component, OnInit } from '@angular/core';
import { faPause, faPlay, faStopwatch, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-preplay-screen',
  templateUrl: './preplay-screen.component.html',
  styleUrls: ['./preplay-screen.component.css']
})
export class PreplayScreenComponent implements OnInit {
  faVolumeUp = faVolumeUp;
  faStopWatch = faStopwatch;
  faPause = faPause;
  faPlay = faPlay;
  constructor() { }
  
  ngOnInit(): void {
  }

}
