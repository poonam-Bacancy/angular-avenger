import { Component, OnInit } from '@angular/core';
import { AvengerService } from '../avenger.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

import { observable } from 'rxjs';


@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent implements OnInit {
  
  // avengers: any = [];
  uploadData: File;
  selectedFile: File;
  avengers: Object;
  avenger: any;
  param_id: string;
  obj = {
    name: '',
    description: '',
    skill: ''
  };
  // xyz: String;
  // submitBtnClick(data){
  //   // this.avengers.push(data.value);
  // 	console.log(this.avengers)
  // }

  constructor(private data: AvengerService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe( params => {
      // this.avengers = params.id
      if (params.id) {
        this.param_id = params.id;
        this.data.getAvenger(params.id).subscribe(
          data => {
            this.avenger = data;
            this.obj = this.avenger;
          }
        )
      }
    });
  }

  submitBtnClick(data) {
    console.log(this.selectedFile)
    const uploadData = new FormData();
    uploadData.append('name', data.value.name);
    uploadData.append('skill', data.value.skill);
    uploadData.append('description', data.value.description);
    uploadData.append('image', this.selectedFile);
    // formData.append('image', this.uploadData);
    console.log('dfdfdfd',uploadData);
    if (this.param_id) {
      this.data.editAvenger(this.param_id, uploadData).subscribe( data => {
        this.router.navigateByUrl('/avengerdetail');
      });
    }
    else {
      this.data.addAvenger(uploadData).subscribe( data => {
        this.router.navigateByUrl('/avengerdetail');
      });
    }
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  } 

  ngOnInit() {
  }

  // ngOnInit() {
  //   this.data.detailAvenger().subscribe(
  //     data => this.avengers = data
  //   )
  //   this.data.getAvenger().subscribe((data) => {
  //     this.avengers = data;
  //     console.log(this.avengers);
  //   })
  // }
}