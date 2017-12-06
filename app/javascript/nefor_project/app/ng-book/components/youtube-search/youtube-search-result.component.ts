import {Component, Input} from "@angular/core";
import {YoutubeSearchResult} from "./youtube-search-result.model";

@Component({
  selector: 'yotube-search-result',
  template: `
  <div class="col-sm-8 col-md-4">
    <div class="thumbnail">
      <img src="{{result.thumbnailUrl}}">
      <div class="caption">
        <h3>{{result.title}}</h3>
        <p>{{result.description}}</p>
        <p><a href="{{result.videoUrl}}"
              class="btn btn-default" role="button">
              Watch</a></p>
      </div>
    </div>
  </div>
  `
})
export class YoutubeSearchResultComponent {
  @Input() result: YoutubeSearchResult;
}
