import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  clickedbtn() {
    var a = document.getElementById('myid');
    a?.style.display == 'none' ? console.log('mak') : console.log('working');
  }
  constructor() {}

  ngOnInit(): void {}
}
