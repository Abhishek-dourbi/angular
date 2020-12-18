import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'Mongo'},
    {id: 3, name: 'Node'},
    {id: 4, name: 'Ruby'},
  ];

  constructor(private router: Router) { }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
  }

  ngOnInit(): void {
  }

}
