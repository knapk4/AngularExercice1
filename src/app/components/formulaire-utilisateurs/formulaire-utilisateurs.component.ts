import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-utilisateurs',
  templateUrl: './formulaire-utilisateurs.component.html',
  styleUrls: ['./formulaire-utilisateurs.component.css']
})
export class FormulaireUtilisateursComponent {
  // Déclaration du tableau utilisateurs, avec un utilisateur exemple.
  users: any[] = [
    {
      nom: 'Nareff',
      prenom: 'Paul',
      email: 'paul.nareff@gamil.com',
      telephone: '0123456789',
      entreprise: 'World Company',
    },
  ];

  // Déclaration du formulaire
  userForm: FormGroup = this.formBuilder.group({
    // Attribut nom avec un validateur 'required' et une longueur minimale de 2
    nom: ['', [Validators.minLength(2), Validators.required]],
    // Attribut prenom avec un validateur 'required' et une longueur minimale de 2
    prenom: ['', [Validators.minLength(2), Validators.required]],
    // Attribut email avec un validateur de type email
    email: ['', [Validators.email, Validators.required]],



    // Attribut telephone avec un validateur 'required' et une longueur minimale de 10
    // On déclare ici un tableau de FomArray
    // On y ajoute les controles pour le numéro de téléphone
    telephones: this.formBuilder.array([
      this.formBuilder.control('', [Validators.minLength(10), Validators.required])
    ]),
    

    // Attribut entreprise avec un validateur 'required' et une longueur minimale de 2
    entreprise: ['', [Validators.minLength(2), Validators.required]],
  })

  // Définition d'un bool avec une valeur par défaut à false
  // Servira à s'assurer de la soumussion du formulaire
  submitted: boolean = false;

  // Ajout du formulaire dans le constructeur
  constructor(private formBuilder: FormBuilder) { }

  // Méthode pour ajotuer un utilisateur
  // Elle est privée et sera appellée par la méthode onSubmit
  private addUser(): void {
    this.users.push(this.userForm.value);
    this.userForm.reset();
    this.submitted = false;
  }

  // Méthode onSubmit pour gérer la soumission du formulaire
  public onSubmit(): void {
    this.submitted = true
    if (this.userForm.valid) {
      this.addUser();
    }
  }

  // Getter pour accéder au controls du formulaire
  public get form() {
    return this.userForm.controls;
  }

  // Getter pour accèder à la liste des téléphones
  public get telephones() : FormArray {
    return this.userForm.get('telephones') as FormArray;
  }

  //Méthode pour ajouter un control dans téléphone
  // la méthode push un controle de téléphone dans le tableau téléphone
  public addTelephone(): void {
    this.telephones.push(this.formBuilder.control('', [Validators.minLength(10), Validators.required]))
  }

  // Méthode pour supprimer un controle de téléphone
  // On retire le dernier élément de l'index
  public removeTelephone(): void {
    this.telephones.removeAt(this.telephones.length - 1);
  }

}

