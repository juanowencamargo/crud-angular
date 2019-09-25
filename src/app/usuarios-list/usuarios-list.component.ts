import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  Usuarios: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadUsuarios()
  }

  // Get lista de usuarios
  loadUsuarios() {
    return this.restApi.getUsuarios().subscribe((data: {}) => {
      this.Usuarios = data;
    })
  }

  // Delete Usuarios
  deleteUser(id) {
    if (window.confirm('desea eliminar este usuario?')){
      this.restApi.deleteUsuarios(id).subscribe(data => {
        this.loadUsuarios()
      })
    }
  }  

}
