import { Component } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.css']
})
export class ButtonMenuComponent {
  buttons:any[] = [
    {
      buttonTitleParent: 'Philippe',
      alertMessageParent: 'Je sais ou tu te caches!!'
    },
    {
      buttonTitleParent: 'Marco',
      alertMessageParent: 'Polo'
    },
    {
      buttonTitleParent: 'Toto',
      alertMessageParent: 'Tata'
    }
  ]
}
