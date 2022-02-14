import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  myvar = false;
  clickedbtn() {
    this.myvar = !this.myvar;
  }
  constructor() {}

  ngOnInit(): void {}
}
