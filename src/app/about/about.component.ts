import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
	<div class="w3-container w3-padding-32" id="about">
    <h2 class="w3-border-bottom w3-border-light-grey w3-padding-16">About Us</h2>
	<img class="w3-image" src="/assets/image/summer.jpg" alt="Architecture" style="opacity:0.5" width="1500" height="800">
	<div class="w3-display-middle w3-margin-top w3-center">
    <h1 class="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-min"><b>COMPANY</b></span> <span class="w3-hide-small w3-text-light-grey">Inc.</span></h1>
	<b>Weather App Development</b>
	  <div>
      Weather is something that never remains constant. Getting to know precise weather conditions helps people to plan out their daily schedule. With weather forecasting technology reaching to the skies, dissemination of the forecast to has taken diverse routes. Weather app development is one such happy fallout. Weather apps enable users to get instant alerts regarding weather conditions. Weather apps are the simplest method to know about the updates of the upcoming weather.
	  </div>
	  <div>
	  <b>why choose us?</b>
	  </div>
	  <div>
	  We at our company pride for being an esteemed Weather App Development Company. Our skilled app developers are adept at developing solutions that can function on multiple platforms. Moreover, our solutions are intuitive and are designed using the latest technologies. Our solutions are accurate and scalable.
	  </div> 
	  </div>
  
    
    
  `,
  styles: [`
  .hero {
    background-image: url('/assets/image/autumn.jpg') !important;
    background-size: cover;
    background-position: center center;
	
}

  `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
