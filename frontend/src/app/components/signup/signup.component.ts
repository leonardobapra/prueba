import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
form = new FormGroup({    
  doc: new FormControl(''),    
  nombres: new FormControl(''),    
  apellidos: new FormControl(''), 
  celular: new FormControl(''),    
  correo: new FormControl(''), 
  genero: new FormControl(''),    
  clave: new FormControl('')
});
  



  constructor(
    private data:DataService, private router:Router
    ) { }

  ngOnInit(): void {
    /* this.data.saludar(); */
  }
  signup(){
    this.data.signup(this.form.value).subscribe((data) =>{
    console.log(data);
    this.router.navigate(['login']);
    
    });

  }

}
