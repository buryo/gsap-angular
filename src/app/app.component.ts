import { Component } from '@angular/core';
import { TimelineMax, TweenMax } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-dream-app';


  clickMeat() {
    console.log('gsap animation');
    TweenMax.to(".meat-image", 1, { rotation: 360, repeat: -1 });
  }
}
