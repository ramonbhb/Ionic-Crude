import { Component, OnInit } from '@angular/core';
import { Contato } from '../models/contato.model';
import { ListaContato} from '../models/listacontato.model';
import { ContatoService } from '../services/contato.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  contatos: ListaContato[];
  constructor(private toast: ToastController, private router: Router, private contatoService: ContatoService) { }

  async ionViewDidEnter() {
    this.contatos = await this.contatoService.getAll();    
  }

  ngOnInit() {
  }

  addContato() {
    this.router.navigate(['/editar-contato']);
  }

  editarContato(contatoKey: ListaContato) {    
    this.router.navigate(['/editar-contato', { key: contatoKey }]);
  }

  async removerContato(contatoKey: ListaContato) {
    await this.contatoService.delete(contatoKey.key);
    let indice = this.contatos.indexOf(contatoKey);
    this.contatos.splice(indice, 1);
    // this.toast.create({
    //   message: "Contato deletado com sucesso",
    //   duration: 5000,
    //   position: "bottom",
    // }).then(
    //   response => {
    //     response.present();
    //   }
    // );
    let response = await this.toast.create({
      message: "Contato deletado com sucesso",
      duration: 5000,
      position: "bottom",
    });
    response.present();
  }
}
