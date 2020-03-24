import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{

  advertisements:[];

  constructor(){

  }

  ngOnInit(): void {
    this.fetchData();
  }
  
  fetchData(){
    fetch("http://localhost:8060/ads").then(ads => 
    ads.json().then( ads => 
      {
        this.advertisements = ads;
        console.log(ads)
      })
    )
  }
  


}
