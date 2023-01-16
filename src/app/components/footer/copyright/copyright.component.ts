import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  public year: number;

  constructor(
    public config: ConfigService
  ) { }

  ngOnInit() {
    // Obtengo el año actual
    this.year = (new Date).getFullYear();
  }

}
