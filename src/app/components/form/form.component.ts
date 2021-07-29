import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formulario!: FormGroup;
  nombre: any = '';

  //mostrar mensaje de error
  // <p *ngIf="!contro.valid Y control.touched  Y control.errors?.required">No es valido</p>
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      tipoAuto: ['', Validators.required],
      trato: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      apellido2: [''],
      email: ['', Validators.required],
      movil: [
        '',
        Validators.required,
        Validators.pattern('^(0|6|7|9)[0-9]{9}$'),
      ],
      provincia: ['', Validators.required],
      concesion: ['', Validators.required],
      terminos: ['', Validators.required],
    });
  }

  enviar(): void {
    console.log(this.formulario.value);
  }
}
