import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
	<footer class="w3-center w3-black w3-padding-16">
		<a>{{ dateObj | date:'YYYY-MM-dd HH:mm:ss':"EST"}}</a>
        <p>Copyright © 2021 Made by Company.Inc. All Rights Reserved. Discussion ? Contact us</p>
	</footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  dateObj =  new Date(); 
  constructor(){
    setInterval(() => {
      this.dateObj = new Date()
    }, 1000)
  }

  ngOnInit(): void {
  }

}

