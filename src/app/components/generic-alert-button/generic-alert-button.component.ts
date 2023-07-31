import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-alert-button',
  templateUrl: './generic-alert-button.component.html',
  styleUrls: ['./generic-alert-button.component.css']
})
export class GenericAlertButtonComponent {

  @Input()
  buttonTitleEnfant!: string;

  @Input()
  alertMessageEnfant!: string;

  onClick(){
    // le mot clef this permet d'accéder aux propriétés du composant
    alert(this.alertMessageEnfant);
  }
}
