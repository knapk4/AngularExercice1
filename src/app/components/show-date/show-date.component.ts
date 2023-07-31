import { Component } from '@angular/core';

@Component({
  selector: 'app-show-date',
  templateUrl: './show-date.component.html',
  styleUrls: ['./show-date.component.css']
})
export class ShowDateComponent {
  today: Date = new Date();
}
