import {Component} from "@angular/core";
import {YoutubeSearchResult} from "./youtube-search-result.model";

@Component({
  selector: 'youtube-search',
  template: `
  <div class="page-header">
    <h1>YouTube Search
      <span
        style="float: right;"
        *ngIf="loading">Loading...</span>
      <!--<img-->
        <!--style="float: right;"-->
        <!--*ngIf="loading"-->
        <!--src="pathtogif">-->
    </h1>
  </div>

  <div class="row">
    <div class="input-group input-group-lg col-md-12">
      <youtube-search-box
        (loading)="loading = $event"
        (results)="updateResults($event)">    
      </youtube-search-box>
    </div>
  </div>
  
  <div class="row">
    <yotube-search-result
      *ngFor="let result of results"
      [result]="result">
    </yotube-search-result>
  </div> 
  `
})
export class YoutubeSearchComponent {
  results: YoutubeSearchResult[];
  loading: boolean;

  updateResults(results: YoutubeSearchResult[]): void {
    this.results = results;
  }
}
