import {Component, OnInit} from '@angular/core';
import {LitigeService} from "./litige.service";


@Component({
  selector: 'app-litige',
  templateUrl: './litige.component.html',
  styleUrls: ['./litige.component.css']
})
export class LitigeComponent implements OnInit {

  constructor(private litigeService: LitigeService) { }

  public test : String ="aze";

  ngOnInit() {
    this.litigeService.getLitige(1).subscribe(response => {
      console.log('get litige: ',response);
      this.test = <string>response;
    });
  }



}
