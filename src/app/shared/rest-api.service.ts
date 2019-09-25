import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Usuarios } from './usuarios';
import { FileUpload } from './file-upload';
import { retry, catchError } from 'rxjs/operators';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Ruta API
  apiURL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => obtiene lista de usuarios
  getUsuarios():Observable<Usuarios> {
    return this.http.get<Usuarios>(this.apiURL + '/usuarios')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getUsuariosById(id):Observable<Usuarios> {
    return this.http.get<Usuarios>(this.apiURL + '/usuarios/buscar/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  /*
  public createUsuario (users: Usuarios){
    return this.http.post(this.apiURL + '/usuarios/guardar/', users)
  }
  */

  
  createUsuario(usuarios):Observable<Usuarios> {
    return this.http.post<Usuarios>(this.apiURL + '/usuarios/guardar/' + usuarios, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  updateUsuario(id, usuarios):Observable<Usuarios>{
    return this.http.put<Usuarios>(this.apiURL + '/usuarios/actualizar/' + id, JSON.stringify(usuarios), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete usuarios
  deleteUsuarios(id){
    return this.http.delete<Usuarios>(this.apiURL + '/usuarios/borrar/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  addFile(fileToUpload: File):Observable<FileUpload> {
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post<FileUpload>(this.apiURL + '/usuarios/import', formData)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }


}
