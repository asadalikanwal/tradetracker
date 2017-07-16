import { Component } from '@angular/core';
import { HttpClient, HttpClientXsrfModule, HttpHeaders } from '@angular/common/http';
// import { MdButtonModule, MdCheckboxModule, MdInputModule, MdToolbarModule, MdGridListModule } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1st Assignment';
  clickMessage = '';
  fetchUrl = '';
  results = '';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor(private http: HttpClient) { }



  onSubmit(fetchData: string) {
    if (fetchData) {
      // fetchData = '/assets/productfeed.xml';
      this.http.post(fetchData, {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      }).subscribe(data => {
        // Read the result field from the JSON response.
        // this.results = JSON.parse(data['results']);
        // this.results = data['results'];
        console.log(data['results'].products.product[0].productID);
      }, err => {
        console.log('Something went wrong again!');
        // this.results = '';
      });
      // this.heroes.push(this.results);
    }
  }


}
