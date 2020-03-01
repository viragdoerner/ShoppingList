import {Component, OnInit} from '@angular/core';
import { products } from '../products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Item} from "./model/item";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from "../form-modal/form-modal.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  validatingForm: FormGroup;

 // products: Item[] = [];
  constructor(
    private http: HttpClient,
    private modalService: NgbModal) { }
  products = products;
  private productsUrl = 'api/items';  // URL to web api


  check() {
    window.alert('The items status has changed!');
    }
/*    public getAllItems(){
      let url = "http://localhost:8080/items";
      this.http.get<Item[]>(url).subscribe(
         res => {
          this.products = res;
        },
         err => {
          alert("an error has occured")
        }
     );
    }*/


  openFormModal() {
    const modalRef = this.modalService.open(FormModalComponent);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    //this.getAllItems();
  }

  /** GET items from the server
  getAllItems (): Observable<Item[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  */

}

