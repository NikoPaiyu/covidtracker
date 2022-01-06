import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'covid-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: 'text' | 'number' | 'email' | 'password';
  @Input() isMargin: boolean = false;
  @Input() id: string;


  constructor() { }

  ngOnInit(): void {
  }

}
