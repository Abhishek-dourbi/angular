import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  private departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  goPrevious() {
    const previousId = this.departmentId - 1;
    this.router.navigate(['../', previousId], {
      relativeTo: this.route
    });
  }

  goNext() {
    const nextId = this.departmentId + 1;
    this.router.navigate(['../', nextId], {
      relativeTo: this.route
    });
  }

  goToDepartments() {
    const selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {
    //   id: selectedId
    // }]);
    this.router.navigate(['../', {id: selectedId}], {
      relativeTo: this.route
    });
  }

  showOverview() {
    this.router.navigate(['overview'], {
      relativeTo: this.route,
    });
  }

  showContact() {
    this.router.navigate(['contact'], {
      relativeTo: this.route,
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = parseInt(params.get('id'));
    });
  }

}
