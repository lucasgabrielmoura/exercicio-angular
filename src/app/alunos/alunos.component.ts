import { Component, OnInit } from '@angular/core';
import { Alunos } from './alunos';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.sass']
})
export class AlunosComponent implements OnInit {

  constructor(private alunoserv:AlunosService) { }

  public "vetorAlunos":Alunos[];
  public "aluno":Alunos;
  public "id":number = -1;

  ngOnInit(): void {
    this.aluno = new Alunos()
    this.vetorAlunos = this.alunoserv.listar()
  }

  excluirAluno(id:number){
    if(this.id != -1){
      alert("Caso queira excluir algum aluno, clique em cancelar, para cancelar a edição")
    }else{
      console.log(this.id)

      this.alunoserv.excluir(id)
    }

    
  }

  cadastrarAluno(nomea:any, notafa:any, notasa:any){
    if(nomea == undefined || notafa == undefined || notafa > 10 || notasa == undefined || notasa > 10){
      alert("Verifique se a nota foi demais ou se todos os campos estão preenchidos (nota limite é 10)")
    }else{
      this.alunoserv.cadastrar(this.aluno)
      this.aluno = new Alunos()
    }
  }

  editarAluno(id:number){
    this.id = id
    this.aluno = new Alunos(
      this.vetorAlunos[id].nome,
      this.vetorAlunos[id].nota1,
      this.vetorAlunos[id].nota2,
    )
  }

  alterarAluno(nomea:any, notafa:any, notasa:any){
    if(nomea == undefined || notafa == undefined || notafa > 10 || notasa == undefined || notasa > 10){
      alert("Verifique se a nota foi demais ou se todos os campos estão preenchidos (nota limite é 10)")
    }else{
      this.alunoserv.editar(this.id, this.aluno)
      this.aluno = new Alunos()
      this.id = -1
    }
  }

  cancelarEdicao(){
    this.id = -1
    this.aluno = new Alunos()
  }
}
