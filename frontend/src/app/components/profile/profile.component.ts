import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import {Router} from '@angular/router';

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
  form1= new FormGroup({
    clave: new FormControl('')
  });

  // reservations: any[] = [];


  constructor(private data:DataService, private router:Router) { }

  ngOnInit(): void {
    // this.getReservations();
  }

  update(){
    this.data.updateClient(this.form.value).subscribe((res) =>{
      console.log(res);
      this.router.navigate(['hlogeado']);
    });
  }

  delete(){
   this.data.deleteClient(this.form1.value).subscribe((res) =>{
     console.log(res);
     this.router.navigate(['home']);
   });
   }

  // getReservations(){
  //   let ctx = this;
  //   this.data.getReservations().subscribe(function(res){
  //     ctx.reservations = res as Array<any>;
  //   });
  // }

}
