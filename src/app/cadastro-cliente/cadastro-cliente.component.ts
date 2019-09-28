import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Form} from '@angular/forms';

@Component({
  selector: 'has-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
formCliente: FormGroup;

   constructor(public formBuiler: FormBuilder) { }

  ngOnInit() {

    this.formCliente = this.formBuiler.group({
      nome : this.formBuiler.control(''),
      cpf : this.formBuiler.control(''),
      email : this.formBuiler.control(''),
      telefone : this.formBuiler.control(''),
      endereco : this.formBuiler.control('')

    })


    }
    onsubmit() {
      console.log(this.formCliente.value);
    }


  }


