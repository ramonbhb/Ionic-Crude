import { Component, OnInit } from '@angular/core';
import { Contato } from '../models/contato.model';
import { ListaContato} from '../models/listacontato.model';
import { ContatoService } from '../services/contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  contatos: ListaContato[];
  constructor(private router: Router, private contatoService: ContatoService) { }

  async ionViewDidEnter() {
    this.contatos = await this.contatoService.getAll();    
  }

  ngOnInit() {
  }

  addContato() {
    this.router.navigate(['/editar-contato']);
  }
}
