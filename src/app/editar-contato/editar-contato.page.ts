import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../services/contato.service';
import { Contato } from '../models/contato.model';
import { ListaContato} from '../models/listacontato.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.page.html',
  styleUrls: ['./editar-contato.page.scss'],
})

export class EditarContatoPage implements OnInit {
  titulo: string;
  model: Contato;
  key: string;
  constructor(private toast: ToastController, private activatedRoute: ActivatedRoute, private contatoService: ContatoService, private router: Router) { }

  async ngOnInit() {
    this.model = new Contato();
    this.activatedRoute.params.subscribe( (data) => {
    
      if ( Object.keys(data).length >= 1) {
        this.contatoService.get(data.key).then( data_object => {
        this.model.nome = data_object.nome;
        this.model.telefone = data_object.telefone;
        this.model.dtnasc = data_object.dtnasc;
        this.model.ativo = data_object.ativo;
        this.key = data.key;
        });
      }
    });    
  }
  
  ionViewDidLeave() {
    delete this.model; 
  }

  async save() {
    await this.saveContato();
    let response = await this.toast.create({
      message: "Contato Salvo com Sucesso",
      duration: 5000,
      position: "bottom",
    })
    response.present();
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
