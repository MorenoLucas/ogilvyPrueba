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
      nombre: ['', Validators.required],
    });
    console.log(this.formulario.getRawValue);
  }
}
