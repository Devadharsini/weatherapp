import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<div class="w3-top">
  <div class="w3-bar w3-white w3-wide w3-padding w3-card">
    <a href="#home" class="w3-bar-item w3-button"><b>COMPANY</b> Inc.</a>
    <!-- Float links to the right. Hide them on small screens -->
    <div class="w3-right w3-hide-small">
	  <a class="navbar-item" routerLink="/">Home</a>
      <a class="navbar-item" routerLink="/contact">      Contact Us</a>
      <a class="navbar-item" routerLink="/about">        About Us</a>
    </div>
  </div>
</div>
    <div class ="navbar is-dark">
        <!--- logo --->
        <div class="navbar-brand">
            
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            
          </div>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  
  constructor(){
   
  }

  ngOnInit(): void {
  }

}
