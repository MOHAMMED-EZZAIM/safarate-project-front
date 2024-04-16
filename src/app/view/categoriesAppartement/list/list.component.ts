import {Component, OnInit} from '@angular/core';
import {CategoriesAppartement} from "../../../shared/model/appartementModel/categories-appartement.model";
import {CategoriesAppartementService} from "../../../shared/service/categories-appartement.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements  OnInit{

  public _ok:boolean=false;

  public  propUpdate!:CategoriesAppartement;
  constructor(public _service :CategoriesAppartementService) {
  }
  get item(): CategoriesAppartement {
    return this._service.item;
  }

  set item(value: CategoriesAppartement) {
    this._service.item = value;
  }
  public save() {
    console.log("hello save")
    this.service.save().subscribe({

      next:response => {
        console.log(response)
        if (response === -1) {
          console.log("mohammed l3z!!")

        } else if (response === -2) {
          console.log("mohammed l3z!!")
        } else if (response === -3) {
        } else if (response === 1) {

          this._ok = true

          setTimeout(() => {
            this._ok = false;
          }, 10000);

          this.get();

        }
      },
      error: () => {
        // Gérer les erreurs
      }
    });
  }


  public  get(){
    this._service.get().subscribe({
      next:data =>{
        this.items=data
        console.log(data.map(value => value.libelle))
      },
      error:err => {
        console.log(err)
      }
    })
  }

  public  delete(cin:string){
    this._service.delete(cin).subscribe({
      next:() => {
        this.get();
      },
      error:(err: any) => {
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


  get items(): Array<CategoriesAppartement> {
    return this._service._items;
  }

  set items(value: Array<CategoriesAppartement>) {
    this._service._items = value;
  }

  get service(): CategoriesAppartementService {
    return this._service;
  }

  set service(value: CategoriesAppartementService) {
    this._service = value;
  }

  ngOnInit(): void {
    this.get();
  }

}
