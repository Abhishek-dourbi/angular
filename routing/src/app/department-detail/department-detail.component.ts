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
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    const nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = parseInt(params.get('id'));
    });
  }

}
