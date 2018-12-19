import { Component, OnInit } from '@angular/core';
import { AvengerService } from '../avenger.service';

@Component({
  selector: 'app-avenger-detail',
  templateUrl: './avenger-detail.component.html',
  styleUrls: ['./avenger-detail.component.css']
})
export class AvengerDetailComponent implements OnInit {

  constructor(private data: AvengerService) { }

  // avengers: Object;
  avengers: any = [];
  ngOnInit() {
    this.data.detailAvenger().subscribe(
      data => this.avengers = data
    )
  }

  deleteAvenger(aveId,index){
    // console.log(this.avengers)
    this.data.deleteAvenger(aveId).subscribe(
      this.avengers.splice(index)
    )
  }

  // deleteUser(user: User): void {
  //   this.userService.deleteUser(user.id)
  //     .subscribe( data => {
  //       this.users = this.users.filter(u => u !== user);
  //     })
  // };
}
