import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  prenom : string;
  nom : string;
  age : string;
  profession : string;
  image : string;
  constructor() { }

  ngOnInit(): void {
  }

}
