import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'photo-gallery';
  galleryRequest$: any;
  gallery: any;
  constructor(private _galleryService: GalleryService) { }

  ngOnInit(): void {
    this.sendReq();
  }

  sendReq() {
    this._galleryService.getGallery().subscribe(res => {
      this.gallery = res;
    });
  }
}
