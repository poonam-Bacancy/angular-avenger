import { Component, OnInit } from '@angular/core';
import { AvengerService } from '../avenger.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-avenger-show',
  templateUrl: './avenger-show.component.html',
  styleUrls: ['./avenger-show.component.css']
})
export class AvengerShowComponent implements OnInit {

  constructor(private data: AvengerService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.avenger = params.id );
  }

  avenger: Object;
  ngOnInit() {
    this.data.getAvenger(this.avenger).subscribe(
      data => this.avenger = data
    )
  }

}
