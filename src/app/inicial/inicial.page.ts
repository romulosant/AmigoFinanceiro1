import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage {

  constructor(private router: Router) { }

  irParaExplorar() {
    this.router.navigate(['/explorar']);
  }
}
