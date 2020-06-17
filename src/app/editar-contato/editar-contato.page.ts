import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../services/contato.service';
import { Contato } from '../models/contato.model';
import { ListaContato} from '../models/listacontato.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.page.html',
  styleUrls: ['./editar-contato.page.scss'],
})
export class EditarContatoPage implements OnInit {
  titulo: string;
  model: Contato;
  key: string;
  /*private routeData;
  form = false; */

  constructor(private contatoService: ContatoService, private router: Router) { }

  ngOnInit() {
    this.titulo = "Adicionar Contato";
    this.model = new Contato();
    this.model.ativo = false;
  }
  
  ionViewDidLeave() {
    delete this.model; 
  }
  
  async save() {
    await this.saveContato();
    this.router.navigate(['/contato']);
  }

  async saveContato() {
    if (this.key) {
      return await this.contatoService.update(this.key,this.model);
    } else {
      return await this.contatoService.insert(this.model);
    }
  }

}
