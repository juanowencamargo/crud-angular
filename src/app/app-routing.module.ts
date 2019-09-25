import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosCreateComponent } from './usuarios-create/usuarios-create.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosEditComponent } from './usuarios-edit/usuarios-edit.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'usuarios-create' },
  { path: 'usuarios-create', component: UsuariosCreateComponent },
  { path: 'usuarios-list', component: UsuariosListComponent },
  { path: 'usuarios-edit/:id', component: UsuariosEditComponent },
  { path: 'usuarios-fileup', component: FileUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
