import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }
  href:any;
  home:any;
  about:any;
  contat:any;
  servico:any;
  condition:any;
  ngOnInit(): void {
    this.href = this.router.url;
    
    if(this.href == '/'){
      this.home = true;
    }
    else if(this.href == '/sobre'){
      this.about = true;
    }
    else if(this.href == '/contato'){
      this.contat = true;
    }
    else if(this.href == '/servico'){
      this.servico = true;
    }

  }

  async homee(){
    await this.router.navigate(['/']);
    await location.reload();
  }

  async sobre(){
    
    
    await this.router.navigate(['/sobre']);
    await location.reload();
  }

  async contato(){
    await this.router.navigate(['/contato']);
    await location.reload();
  }

  async servicoo(){
    await this.router.navigate(['/servico']);
    await location.reload();
  }

  async menu(){
    
    this.condition = true;
    let a = setTimeout(() => {
      this.condition= null;
    }, 10000);
  }

}
