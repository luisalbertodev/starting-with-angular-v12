import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  title: string;
  power: number;
  items: string[];

  constructor() {
    this.title = 'platzi-store';
    this.power = 10;
    this.items = ['carl', 'nicolas', 'luis'];
  }

  ngOnInit(): void {}

  addItem() {
    this.items.push(this.title);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
