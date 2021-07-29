import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}
  url = 'https://my-json-server.typicode.com/typicode/demo/posts';
  get() {
    return this.http.get(this.url);
  }
  post(data: any) {
    // enviar datos nuevos
    return this.http.post(this.url, data);
  }
  delete(data: any) {
    // eliminar datos
    return this.http.delete(this.url, data);
  }
  put(data: any) {
    // actualizar o modiicar un campo
    return this.http.put(this.url, { data });
  }
}
