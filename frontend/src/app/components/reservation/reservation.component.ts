import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  
  form = new FormGroup({
    cant_adultos: new FormControl(''),
    cant_ninos: new FormControl(''),
    fecha_ingreso: new FormControl(''),
    fecha_salida: new FormControl(''),
    com_ingreso: new FormControl('')

  });
  
  constructor(
    private data: DataService
    ) { }

  ngOnInit(): void {
  }

  reservation() {
    this.data.reservation(this.form.value).subscribe(function (res) {
      console.log(res);

    });
}
}
