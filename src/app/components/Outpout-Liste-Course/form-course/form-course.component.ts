import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.css']
})
export class FormCourseComponent {

    // On déclare notre Output
    @Output()
    // Il est de type EventEmitter
    // La valeur <any> correspond au type de l'objet qui sera renvoyé
    // Pour le moment on le type en any on verra plus tard pour le typer à partir d'un modèle
    onAddArticle: EventEmitter <any> = new EventEmitter();

    // On déclare notre formulaire
    article: FormGroup = this.formBuilder.group({
      designation: ['', Validators.required],
      prix: ["", Validators.required]
    });

    // On déclare une variable qui indique si le formulaire est validé
    submitted: boolean = false;

    constructor(private formBuilder : FormBuilder) {}

    // Création d'une méthode privée pour reset mon formulaire
    private resetForm() :void {
      this.article.reset();
      this.submitted = false;
    }

    // On déclare une méthode onSubmit() qui fonctionnera au click
    public onSubmit(): void {
      this.submitted = true;
      if (this.article.valid) {
        // Si le formulaire est valide on envoie l'objet à l'écouter
        this.onAddArticle.emit(this.article.value);
        // Puis on appel la méthode reset()
        this.resetForm();
      } else {
        console.log('Formulaire invalide');
      }
    }

    // Getter pour récuperer les FormControl
    get form() {
      return this.article.controls;
    }
}
