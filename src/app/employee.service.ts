import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {"id": 1, "name": "Andrew", "age": 30},
      {"id": 2, "name": "James", "age": 20},
      {"id": 3, "name": "Jones", "age": 14},
      {"id": 4, "name": "Martha", "age": 24}
    ];
  }
}
