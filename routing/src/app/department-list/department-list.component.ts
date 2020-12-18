import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

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

  private selectedId;

  constructor(private router: Router, private route: ActivatedRoute) { }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
  }

  isSelected(department) {
    return this.selectedId === department.id;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
    });
  }

}
