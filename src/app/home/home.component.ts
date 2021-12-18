import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../weatherapi.service';

@Component({
  selector: 'app-home',
  template: `
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <header class="w3-display-container w3-content w3-wide" style="max-width:1500px;" id="home">
  <img class="w3-image" src="/assets/image/summer.jpg" alt="Architecture" style="opacity:0.5" width="1500" height="800">
  <div class="w3-display-middle w3-margin-top w3-center">
    <h1 class="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-min"><b>COMPANY</b></span> <span class="w3-hide-small w3-text-light-grey">Inc.</span></h1>
					<h1 class="title" *ngIf="data">
				Current temperature in Toronto {{data.main.temp}} <span>&#8451;</span>
				</h1>
  </div>
</header>
<div class="w3-container w3-padding-32" id="projects">
    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Seasons</h3>
  </div>

  <div class="w3-row-padding">
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Spring </div>
        <img src="/assets/image/summer.jpg" alt="House" style="width:100%">
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Autumn</div>
        <img src="/assets/image/winter.jpg" alt="House" style="width:100%">
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Summer</div>
        <img src="/assets/image/spring.jpg" alt="House" style="width:100%">
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Winter</div>
        <img src="/assets/image/autumn.jpg" alt="House" style="width:100%">
      </div>
    </div>
  </div>
			

  `,
  styles: [`
  .hero {
    background-image: url('/assets/image/autumn.jpg') !important;
    background-size: cover;
    background-position: center center;
	
}
	.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

  `]
})
export class HomeComponent implements OnInit {
  data: any;
  constructor(private wapi: WeatherapiService) { }
  
  ngOnInit(): void {
    this.wapi.getdata()
    .subscribe(data => {console.log(data)
    this.data=data});
  };
  

}
