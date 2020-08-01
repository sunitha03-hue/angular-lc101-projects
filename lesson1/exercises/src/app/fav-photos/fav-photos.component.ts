import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favourite';
  image1 = 'http://goodnewsnotebook.com/wp-content/uploads/2015/03/Believe-in-Yourself-Be-You-2.png';
  image2 = 'https://i2.wp.com/www.kidsworldfun.com/blog/wp-content/uploads/2016/09/butterfly-and-cocoon.jpg';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}