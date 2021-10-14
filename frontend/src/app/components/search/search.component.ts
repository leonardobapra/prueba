import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string = "";
  minFloor: number = 0;
  maxFloor: number = 0;
  minPrice: number = 0;
  maxPrice: number = 0;
  capacity: number = 0;
  stars: number = 0;
  _minibar: boolean = false;

  results: any[] = [];

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    
  }

  search() {
    let ctx = this;
    this.data.search(this.searchText).subscribe(function (res) {
      ctx.results = res as Array<any>;
    })
    
  }

  piso(event: any) {
    let ctx = this;

    let data= {
      filter: 'piso',
      min: this.minFloor,
      max: this.maxFloor
    };

    this.data.filter(data).subscribe(function (res) {
      ctx.results = res as Array<any>;
    });
  }

  precio(event: any) {
    let ctx = this;

    let data = {
      filter: 'precio',
      min: this.minPrice,
      max: this.maxPrice
    };

    this.data.filter(data).subscribe(function (res) {
      ctx.results = res as Array<any>;
    });
  }

  estrellas() {
    let ctx = this;

    let data = {
      filter: 'estrellas',
      value: this.stars
    };

    this.data.filter(data).subscribe(function (res) {
      ctx.results = res as Array<any>;
    });
  }

  capacidad(event: any) {
    let ctx = this;

    let data = {
      filter: 'capacidad',
      value: this.capacity
    };

    this.data.filter(data).subscribe(function (res) {
      ctx.results = res as Array<any>;
    });
  }

  minibar() {
    let ctx = this;

    let data = {
      filter: 'minibar',
      value: this._minibar ? 1 : 0
    };

    this.data.filter(data).subscribe(function (res) {
      ctx.results = res as Array<any>;
    });
  }

}
