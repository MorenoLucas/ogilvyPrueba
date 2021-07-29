import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formulario!: FormGroup;
  nombre: any = '';
  dataBase: any;
  provincias: any[] = [];
  concesionarios: any = [];
  selectProv: string = '';
  //mostrar mensaje de error
  // <p *ngIf="!contro.valid Y control.touched  Y control.errors?.required">No es valido</p>
  constructor(private fb: FormBuilder, private db: AngularFirestore) {}

  async ngOnInit() {
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
      terminos: ['', Validators.required, Validators.requiredTrue],
    });
    await this.db
      .collection('concesionarios')
      .valueChanges()
      .subscribe((data) => {
        this.dataBase = data;
      });
  }

  async ShowConcesion() {
    this.db
      .collection('concesionarios')
      .doc(this.selectProv)
      .valueChanges()
      .subscribe((c) => {
        console.log(c);
        let prov = c;
        this.concesionarios = prov;
      });
  }
  enviar() {
    //se guardan los datos en base de datos de firebase
    const data = this.formulario.getRawValue();
    this.db.collection('informacion').add(data);
  }
}
