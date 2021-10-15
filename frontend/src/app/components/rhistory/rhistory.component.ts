import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-rhistory',
  templateUrl: './rhistory.component.html',
  styleUrls: ['./rhistory.component.css']
})
export class RhistoryComponent implements OnInit {

  hab_id:number=0;

  form = new FormGroup({
    calificacion: new FormControl(''),
    com_salida: new FormControl(''),
    id: new FormControl(this.hab_id)
  });


  constructor(private data: DataService, private router: Router, private route: ActivatedRoute) { }

  reservations: any[] = [];
  

  ngOnInit(): void {
    this.getReservations();
  }
  getReservations() {
    let ctx = this;
    this.data.getReservations().subscribe(function (res) {
      ctx.reservations = res as Array<any>;
    });
  }

  getHab(){
    this.route.params.subscribe((params: Params) => {
      console.log(params)
      this.hab_id = params.hab_id
    })
    return this.hab_id
  }



  updateR() {
    this.data.updateReservations(this.form.value).subscribe(function (res) {
      console.log(res);
    });
  }
}
