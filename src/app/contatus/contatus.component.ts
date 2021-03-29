import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contatus',
  templateUrl: './contatus.component.html',
  styleUrls: ['./contatus.component.css']
}) 
export class ContatusComponent implements OnInit {

  data: Service
  resposta: string;
  sucesso: boolean;
  val: string;

  constructor(
    public apiService: ApiService,
  ) {
    this.data = new Service();
  }
 
  ngOnInit(): void {
  }

  submitForm() {
    this.data.valor = this.val;
    
    if(this.data.nome == null){
      this.resposta = 'Prencher o nome';
      this.sucesso = false;
      
    }else if(this.data.telefone == null && this.data.email == null){
     this.resposta = 'Prencher o telefone ou email';
      this.sucesso = false;
    }else if(this.data.valor == '0,00'){
     this.resposta = 'Precisa ser um valor maior que 0';
     this.sucesso = false;
    }
    else{
    this.sucesso = true;
    let a = setTimeout(() => {
     this.sucesso = null;
   }, 2000);
   this.apiService.postproposta(this.data).subscribe((response)=>{
     console.log(response)
   })
   }
   }
 

}
