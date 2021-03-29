import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private router : Router) { }
  href:any;
  about:any; 
  service:any;
  ngOnInit(): void {
    this.href = this.router.url;
    if(this.href == '/sobre'){
      this.about = true;
    }
    else if(this.href == '/service'){
      this.service = true;
    }

    console.log(this.href)
  }

}
