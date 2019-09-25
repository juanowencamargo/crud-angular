import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../shared/file-upload';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  fileToUpload: File = null;

  constructor(
    public restApi: RestApiService, 
    public router: Router
    ) { }

  //public fileData = new FileUpload();
  subirArchivo(files: FileList){
    this.fileToUpload = files.item(0);
  }

  ngOnInit() {
  }

  onUpload(dataFile){
    this.restApi.addFile(this.fileToUpload).subscribe((data: {}) =>{
      this.router.navigate(['/usuarios-fileup'])
    })
  }
}