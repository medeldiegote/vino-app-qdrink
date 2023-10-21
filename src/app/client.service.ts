import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  cliente: Client
  constructor() {
    this.cliente = {
      id: '',
      nombre: '',
      apellido: '',
      dinero: '',
    }
  }
  getIdClient() {
    return this.cliente.id
  }
  setCliente(id: string, nombre: string, apellido: string, dinero: string) {
    this.cliente = {
      id: id,
      nombre: nombre,
      apellido: apellido,
      dinero: dinero
    }
  }
  getClient(){
    return this.cliente;
  }
  clearCliente() {
    this.cliente = {
      id: '',
      nombre: '',
      apellido: '',
      dinero: ''
    }
  }
}
export class Client {
  constructor(public id: string, public nombre: string, public apellido: string, public dinero: string) {
  }
}
