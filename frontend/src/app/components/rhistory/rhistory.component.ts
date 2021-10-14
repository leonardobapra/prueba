import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-rhistory',
  templateUrl: './rhistory.component.html',
  styleUrls: ['./rhistory.component.css']
})
export class RhistoryComponent implements OnInit {

  form = new FormGroup({
    calificacion: new FormControl(''),
    com_salida: new FormControl('')
  });

  constructor(private data: DataService) { }

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

  updateR() {
    this.data.updateReservations(this.form.value).subscribe(function (res) {
      console.log(res);
    });
  }
}
