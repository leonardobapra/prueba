import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  comment_out: string = "Sin comentarios";
  califica: number = 0;
  id!: number;
  
  form = new FormGroup({
    habitacion_id: new FormControl(this.id),
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
    private data: DataService, private router:Router, private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params)
      this.id = params.id
    });
  }


  reservation() {
    this.data.reservation(this.form.value).subscribe( (res) => {
      console.log(res);
      this.router.navigate(['rhistory']);
      
    });
}
}
