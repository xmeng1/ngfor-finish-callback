import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-li-ready',
  templateUrl: './li-ready.component.html',
  styleUrls: ['./li-ready.component.css']
})
export class LiReadyComponent implements OnInit {

  items: string[] = [];

  @Input() item;
  constructor() { }

  ngOnInit(): void {
    console.log('LiReadyComponent');
  }

  @Input()
  set ready(isReady: boolean) {
    if (isReady) {
      console.log('===isReady!');
    }
  }
}
