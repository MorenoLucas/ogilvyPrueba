import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  provincias: any;
  data: any;
  constructor(private db: AngularFirestore) {}
}
