import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

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

  public name = '';

  public displayName = false;

  public color = 'red';

  public colors = ['red', 'yellow', 'blue', 'green'];

  @Input() public parentData: any;
  @Input('parentData') public label: any;
  @Output() public childEvent = new EventEmitter();

  public term = 'Angular';
  public message = 'welcome to angular';
  public person = {
    "firstname": "John",
    "lastname": "Doe"
  };
  public date = new Date();

  fireEvent(): void {
    this.childEvent.emit('Hello Child');
  }


  onClick(event: any): void {
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(val: string): void {
    alert(val);
  }

  ngOnInit(): void {
  }

}
