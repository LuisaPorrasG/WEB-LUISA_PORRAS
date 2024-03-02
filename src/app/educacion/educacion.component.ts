import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  imagenUrl: string = 'assets/udemy.PNG';
  imagenUrl2: string = 'assets/sena.PNG';
  imagenUrl3: string = 'assets/udea.PNG';

  ngOnInit(): void {
  }

}
