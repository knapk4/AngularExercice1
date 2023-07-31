import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  // On déclare notre liste de prénom
  items: string[] = ["Carlos", "Johnny Halliday", "Michel Polnareff"]
}
