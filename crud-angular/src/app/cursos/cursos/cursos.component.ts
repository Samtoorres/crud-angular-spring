import { ErrorDialogComponent } from './../../shared/componentesCompartilhados/error-dialog/error-dialog.component';
import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]>;
  displayedColumns: string[] = ['name', 'category'];

  constructor(private cursosService: CursosService, public dialog: MatDialog) {
    this.cursos$ = this.cursosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar os cursos');
        return of([])
      })
    );
  }

  ngOnInit(): void {
  }

  onError(errorMensagem: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMensagem
    });
  }

}
