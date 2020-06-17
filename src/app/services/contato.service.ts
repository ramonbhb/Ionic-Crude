import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe} from '@angular/common';
import { Contato } from '../models/contato.model';
import { ListaContato } from '../models/listacontato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private storage: Storage, private datePipe: DatePipe) { }

  /* CRUD -> CREATE, REGISTER, UPDATE, DELETE */
  public insert(contato: Contato) {
    let key = this.datePipe.transform(new Date(), 'ddMMyyyyHHmmss');
    // key = '15062020214150'            
    return this.save(key,contato);
  }

  public update(key: string, contato: Contato) {
    return this.save(key,contato);
  }
  
  public save(key:string,contato: Contato) {
    this.storage.set(key,contato);
  }

  public delete(key: string) {
    return this.storage.remove(key);
  }

  public get(key: string) {
    return this.storage.get(key);
  }

  public getAll() {
      let contatos: ListaContato[] = [];
      return this.storage.forEach(
        (value: Contato, key: string, interationNumber: Number) => {
           let contato = new ListaContato();
           contato.key = key;
           contato.contato = value;
           contatos.push(contato);
        }).then( () => {
          return Promise.resolve(contatos);
        }).catch( (error) => {
          return Promise.reject(error);
        })    
  }

}