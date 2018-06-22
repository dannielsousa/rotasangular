import { Component, OnInit } from '@angular/core';
import { Constants } from '../shared/Constants';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  teste: any;

  constructor() { }

  ngOnInit() {

    this.teste = Constants.GENERAL;
    console.log(this.teste);

  }

}
