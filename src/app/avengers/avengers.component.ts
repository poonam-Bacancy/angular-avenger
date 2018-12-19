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
  avengers: Object;
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
    this.data.addAvenger(data.value).subscribe( data => {
      // this.router.navigate(['/avengerdetail']);
      this.router.navigateByUrl('/avengerdetail');
    });
  }
  avenger: any;

  ngOnInit() {
    // this.data.getAvenger(this.avenger).subscribe(
    //   data => this.avenger = data
    // )
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