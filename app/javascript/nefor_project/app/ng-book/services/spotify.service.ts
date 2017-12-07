import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  constructor(public http: HttpClient) {

  }

  searchTrack(query: string) {
    let params: string = [
      `q=${query}`,
      `type=track`
    ].join('&');
    let queryUrl: string = `https://api.spotify.com/v1/search?${params}`;
    return this.http.get(queryUrl).map(res => res);
  }
}
