import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  items: string[] = [];

  ngOnInit(): void {
    let i = 1000;
    while (i !== 0) {
      this.items.push('string' + i);
      i--;
    }
    console.log('AppComponent initial');
  }

  // @Input()
  // set ready(isReady: boolean) {
  //   if (isReady) {
  //     console.log('isReady!');
  //   }
  // }
}
