import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent {
  // ajoute une méthode onClick() dans la classe
  onClick() {
    alert("Tu as tout cassé!!");
  }
}
