import { Injectable } from '@angular/core';
import * as data from './secrets.json'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {



  private giphyEndpoint: string = 'https://api.giphy.com/v1/gifs/trending';
  private queryString: string = `?api_key=${data.api_key}`;
  private _gallery = new BehaviorSubject<any[]>([]);

  constructor(private _http: HttpClient) {
    this.getTrending().subscribe((res: any) => {
      this._gallery.next(res.data);
    });
  }

  private getTrending() {
    return this._http.get(this.giphyEndpoint + this.queryString);
  }
  public getGallery() {
    return this._gallery.asObservable();
  }

}
