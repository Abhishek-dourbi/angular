import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public title = 'Boom';
  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-error': this.hasError,
    'text-special': this.isSpecial
  };

  public highlightColor = 'orange';
  public titleStyle = {
    color: 'brown',
    fontStyle: 'italic'
  };


  public greeting = '';
  onClick(event: any): void {
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(val: string): void {
    alert(val);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
