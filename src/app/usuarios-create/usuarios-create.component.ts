import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.css']
})
export class UsuariosCreateComponent implements OnInit {

  @Input() frmUser = { nombre: '', apellidos: '', telefono: '', genero: '', correo: '', imagen: '' }

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() {
  }

  addUser(dataUser){
      this.restApi.createUsuario(this.frmUser).subscribe((data: {}) =>{
      this.router.navigate(['/usuarios-list'])
    })
  }

}
