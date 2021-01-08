import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input() QLTSIN:string;
  @Output() Fish = new EventEmitter<string>();
  addFish(value: string) {
    console.log(value)
    this.Fish.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
