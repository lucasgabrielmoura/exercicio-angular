import { Injectable } from '@angular/core';
import { Alunos } from './alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  private vetorAlunos:Alunos[] = [
    new Alunos("Joséfino Silva", 9, 10),
    new Alunos("Carlos André", 3, 4),
    new Alunos("Lorenzo Lima", 8, 5)
  ]

  public cadastrar(aluno:Alunos){
    this.vetorAlunos.push(aluno)
  }

  public listar(){
    return this.vetorAlunos
  }

  public excluir(id:number){
    this.vetorAlunos.splice(id, 1)
  }

  public editar(id:number, aluno:Alunos){
    this.vetorAlunos[id] = aluno;
  }
}
