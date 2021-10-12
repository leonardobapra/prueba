import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  form = new FormGroup({
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    correo: new FormControl(''),
    clave: new FormControl('')
  });

  reservations: any[] = [];


  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.getReservations();
  }

  update(){
    this.data.updateClient(this.form.value).subscribe(function(res){
      console.log(res);
    });
  }

  getReservations(){
    let ctx = this;
    this.data.getReservations().subscribe(function(res){
      ctx.reservations = res as Array<any>;
    });
  }

}
