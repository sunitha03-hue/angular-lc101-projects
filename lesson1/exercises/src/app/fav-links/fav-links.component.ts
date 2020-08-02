import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favlinks = ["https://www.tonyrobbins.com/building-confidence/how-to-believe-in-yourself/#:~:text=Believing%20in%20yourself%20is%20the,creating%20the%20life%20you%20desire.", "https://i2.wp.com/www.kidsworldfun.com/blog/wp-content/uploads/2016/09/butterfly-and-cocoon.jpg", "https://www.jackcanfield.com/blog/how-to-believe-in-yourself/"];
  constructor() { }

  ngOnInit() {
  }

}
