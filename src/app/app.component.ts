import { Component } from '@angular/core';
// import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { ServerService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trade Tracker';
  productlist = [];
  loader = false;

  constructor(private serverService: ServerService) { }
  onSubmit(fetchData: string) {
    this.loader = true;
    this.serverService.getServers(fetchData)
      .subscribe(

          data => {
            this.productlist = data.product;
            this.loader = false;
          },

          (error) => {
              this.loader = false;
              console.log("error", error)
            }
      );

  }
}
