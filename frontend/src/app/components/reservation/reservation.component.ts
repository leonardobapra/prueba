import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  
  form = new FormGroup({
    habitacion_id: new FormControl(''),
    cant_adultos: new FormControl(''),
    cant_ninos: new FormControl(''),
    fecha_ingreso: new FormControl(''),
    fecha_salida: new FormControl(''),
    recogida: new FormControl(''),
    mascota: new FormControl(''),
    com_ingreso: new FormControl(''),
    calificacion: new FormControl(''),
    com_salida: new FormControl('')

  });
 
  
  constructor(
    private data: DataService, private router:Router
    ) { }

  ngOnInit(): void {
  }

  reservation() {
    this.data.reservation(this.form.value).subscribe( (res) => {
      console.log(res);
      this.router.navigate(['rhistory']);
      
    });
}
}
