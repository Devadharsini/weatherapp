import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <div class="w3-container w3-padding-32" id="about">
    <h2 class="w3-border-bottom w3-border-light-grey w3-padding-16">Seasons</h2>
	<img class="w3-image" src="/assets/image/summer.jpg" alt="Architecture" style="opacity:0.5" width="1500" height="800">
	<div>
	<h1><b>Seasons</b></h1>
	<div>
	<b>Summer</b>
	<p>Summer is the hottest of the four temperate seasons, occurring after spring and before autumn. At or around the summer solstice (about 3 days before Midsummer Day), the earliest sunrise and latest sunset occurs, the days are longest and the nights are shortest, with day length decreasing as the season progresses after the solstice. The date of the beginning of summer varies according to climate, tradition, and culture. When it is summer in the Northern Hemisphere, it is winter in the Southern Hemisphere, and vice versa.</p>
	</div>
	<div>
	<b>Spring</b>
	<p>Spring, also known as springtime, is one of the four temperate seasons, succeeding winter and preceding summer. There are various technical definitions of spring, but local usage of the term varies according to local climate, cultures and customs. When it is spring in the Northern Hemisphere, it is autumn in the Southern Hemisphere and vice versa. At the spring (or vernal) equinox, days and nights are approximately twelve hours long, with daytime length increasing and nighttime length decreasing as the season progresses.</p>
	</div>
	<div>
	<b>Autumn</b>
	</div>
	<p>Autumn, also known as fall in North American English,[1] is one of the four temperate seasons. Outside the tropics, autumn marks the transition from summer to winter, in September (Northern Hemisphere) or March (Southern Hemisphere). Autumn is the season when the duration of daylight becomes noticeably shorter and the temperature cools considerably. Day length decreases and night length increases as the season progresses until the Winter Solstice in December (Northern Hemisphere) and June (Southern Hemisphere). One of its main features in temperate climates is the striking change in colour for the leaves of deciduous trees as they prepare to shed.</p>
	</div>
	<div>
	<b>Winter</b>
	<p>Winter is the coldest season of the year in polar and temperate zones. It occurs between autumn and spring each year. Winter is caused by the axis of the Earth in that hemisphere being oriented away from the Sun. Different cultures define different dates as the start of winter, and some use a definition based on weather.</p>
	</div>
    </div>
	<div class="w3-container w3-padding-32" id="contact">
    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
    <p>Lets get in touch and talk about your next project.</p>
    <form action="/action_page.php" target="_blank">
      <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name">
      <input class="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email">
      <input class="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject">
      <input class="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment">
      <button class="w3-button w3-black w3-section" type="submit">
        <i class="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </form>
  </div>
	<h1 style="text-align:center"><b>We Love Hearing Your Feedback</b></h1>
	<p style="text-align:center"> You can contact us at +1647-000-0000</p>
	<p style="text-align:center">Or send a mail to company.Inc@gmail.com</p>
  `,
  styles: [`
  .hero {
    
    background-size: cover;
    background-position: center center;
	
}

  `]
})
export class ContactComponent implements OnInit {
  name:string[]=[];
  email:string[]=[];
  message:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    // grab all the feilds and their values
    alert('form is being submitted ');
  }

}
