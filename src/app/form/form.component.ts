import { Component, OnInit} from '@angular/core';
import SimpleMaskMoney from 'simple-mask-money'; 
import { Service } from '../models/service';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  val = '0,00';
  sucesso:any;
  resposta:any;


  data: Service

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

  


 


  ngAfterViewInit() {
    // Default configuration  
    const args = {
      allowNegative: false,
      negativeSignAfter: false,
      prefix: '',
      suffix: '',
      fixed: true,
      fractionDigits: 2,
      decimalSeparator: ',',
      thousandsSeparator: '.',
      cursor: 'move'
    };

    // set mask on your input you can pass a querySelector or your input element and options
    SimpleMaskMoney.setMask('#myInput', args);
  }

  // Your send method
  send(e) {
    if (e.key !== 'Enter') return;
    // This method return value of your input in format number to save in your database
    console.log(SimpleMaskMoney.formatToNumber(this.val));
  }

}
