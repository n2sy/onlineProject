import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  prenom : string = "amine"
  cl : string = "yellow";
  show = true;
  constructor() { }

  ngOnInit(): void {
  }

  showAlert() {
    alert('Msg from Event')
  }

  toggleHidden() {
    this.show = !this.show
  }

}
