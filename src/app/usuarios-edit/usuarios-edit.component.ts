import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.css']
})
export class UsuariosEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  dataUser: any = {};
  
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getUsuariosById(this.id).subscribe((data: {}) => {
      this.dataUser = data;
    })
  }

  updateUsuarios(){
    if(window.confirm('Seguro que decea guardar los cambios?')){
      this.restApi.updateUsuario(this.id, this.dataUser).subscribe(data => {
        this.router.navigate(['/usuarios-list'])
      })
    }
  }

}
