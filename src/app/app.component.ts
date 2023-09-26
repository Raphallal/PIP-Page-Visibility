import { Component, ViewChild, ElementRef } from '@angular/core';

interface VideoElement extends HTMLVideoElement{
  requestPictureInPicture(): any;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  @ViewChild("videoElement") videoElement: ElementRef;

  constructor() {
    document.addEventListener('visibilitychange', () => {
      {
        console.log(`Change visibility to ${document.visibilityState}`);
      }
    });
  }

  ngAfterViewInit(){
    const video:  VideoElement = this.videoElement.nativeElement;

    //video.setAttribute("src", "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4");

    video.addEventListener('play', async (e) => {
      await video.requestPictureInPicture();
    })
  }

}
