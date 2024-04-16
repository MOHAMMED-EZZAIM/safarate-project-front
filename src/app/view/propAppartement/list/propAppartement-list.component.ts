import {Component, OnInit} from '@angular/core';
import {PropAppartementService} from "../../../shared/service/propAppartement.service";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {PropAppartement} from "../../../shared/model/appartementModel/propAppartemenet.model";
import {response} from "express";

@Component({
  selector: 'app-PropAppartement-create',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgIf,
    NgForOf,
    NgClass
  ],
  templateUrl: './propAppartement-list.component.html',
  styleUrl: './propAppartement-list.component.css'
})
export class PropAppartementListComponent implements OnInit{


  public _ok:boolean=false;

  public  propUpdate!:PropAppartement;
  constructor(public _service :PropAppartementService) {
  }
  get item(): PropAppartement {
    return this._service.item;
  }

  set item(value: PropAppartement) {
    this._service.item = value;
  }
  public save() {
    this.service.save().subscribe({

      next: (response) => {

console.log(response)
        if (response === -1) {

        } else if (response === -2) {
          console.log("mohammed l3z!!")
        } else if (response === -3) {
          // Traitement pour le cas où l'enregistrement a échoué avec le code -3
        } else if (response === 1) {

          this._ok = true
          setTimeout(() => {
            this._ok = false; // Hide the notification after 5 seconds
          }, 10000);

          this.get();

        }
      },
      error: (err) => {
        // Gérer les erreurs
      }
    });
  }


  public  get(){
    this._service.get().subscribe({
      next:data=>{
        this.items=data
      },
      error:err => {
        console.log(err)
      }
    })
  }

  public  delete(cin:string){
    this._service.delete(cin).subscribe({
    next:value => {
      this.get();
    },
      error:err => {
      console.log(err)
      }
    })
  }

  public  update():any{
    return this._service.update(this.propUpdate).subscribe({
      next:()=>{
        this.get();
    },
      error:()=>{

      }

    })

  }


  get items(): Array<PropAppartement> {
    return this._service._items;
  }

  set items(value: Array<PropAppartement>) {
    this._service._items = value;
  }

  supprimet() {
    this.item.nom="";
    this.item.prenom="";
    this.item.email="";
    this.item.usernamePropAppt="";
    this.item.ribPropAppt="";
    this.item.numTele="",
      this.item.numCompteBkPropApp="",
      this.item.cin=""
  }
  get service(): PropAppartementService {
    return this._service;
  }

  set service(value: PropAppartementService) {
    this._service = value;
  }

  ngOnInit(): void {
    console.log(this.items.map(value => console.log(value)))
    this.get();
  }

}

