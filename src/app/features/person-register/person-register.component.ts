import { Component } from '@angular/core';
import { LegalStatus, Person } from '../../shared/interface/interfaces';
import { listLegalStatus, listElementsAmount, listOfPersons } from '../../shared/constants/constants';

@Component({
  selector: 'app-person-register',
  templateUrl: './person-register.component.html',
  styleUrl: './person-register.component.css'
})
export class PersonRegisterComponent {

  //Lista de estados legales (constante)
  listLegalStatus: LegalStatus[] = listLegalStatus;
  listElementsAmountValues: number[] = listElementsAmount;
  listPersons: Person[] = listOfPersons;
  listElements: number = 100;
  listElementsAmount: number = 5;

  currentPage = 1;
  totalPages = 20;
  pagesToShow = 2;
  paginationDisplay: string[] = ['1','2','...',this.totalPages.toString()];

  //TODO: Revisar paginación, es mejorable
  buildPagination():void{

    const pages: (string)[] = [];

    if (this.totalPages <= 10){
      for (let i = 1; i <= this.totalPages; i++) pages.push(i.toString());
    }else{
      pages.push('1');

      const start = Math.max(2, this.currentPage - 1);
      console.log('start', start);
      const end = Math.min(this.totalPages - 1, this.currentPage + 1);
      console.log('end', end);

      if (start > 2) pages.push('...');
      for (let i = start; i <= end; i++) pages.push(i.toString());
      if (end < this.totalPages - 1) pages.push('...');

      pages.push(this.totalPages.toString());
    }

    this.paginationDisplay = pages;
    console.log(this.paginationDisplay);

  }

  changePage(page: string, code: string): void {

    var actualPage = 1;

    switch(code){
      case 'actual':
        actualPage = parseInt(page); break;
      case 'back':
        actualPage = parseInt(page) - 1; break;
      case 'forward':
        actualPage = parseInt(page) + 1; break;
    }

    if (actualPage < 1 || actualPage > this.totalPages || actualPage === this.currentPage) return;
    this.currentPage = actualPage;
    console.log('CAMBIANDO A PAGINA: ', this.currentPage);
    this.buildPagination();

    // Aquí haces la llamada al back con la página nueva
    //this.fetchData(this.currentPage);
  }

}
