import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  images: string[];

  constructor() {
    this.images = [
      '/assets/images/banner-1.jpeg',
      '/assets/images/banner-2.jpeg',
      '/assets/images/banner-3.jpeg',
    ];
  }

  ngOnInit(): void {}
}
