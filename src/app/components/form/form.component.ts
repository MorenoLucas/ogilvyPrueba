import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataBaseService } from 'src/app/services/data-base.service';
import { RestService } from 'src/app/services/rest.service';

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

  constructor(
    private fb: FormBuilder,
    private db: AngularFirestore,
    private rest: RestService
  ) {
    this.rest.get().subscribe((data) => {
      console.log(data);
    });
  }

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
    //cogemos de los datos de la base de datos
    await this.db
      .collection('concesionarios')
      .valueChanges()
      .subscribe((data) => {
        this.dataBase = data;
      });
  }
  //Cuando se selecciona una provincia muestra los concesionarios correspondients
  ShowConcesion() {
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
    this.db
      .collection('informacion')
      .add(data)
      .finally(() => {
        alert('Formulario Enviado con Exito');
        window.location.reload();
      });
  }
}
