import { Injectable } from '@angular/core';
import PostDepartment from '../contracts/post-department';

@Injectable({
  providedIn: 'root'
})
export class PostDepartmentService {
  postDepartmentList = [
    new PostDepartment(
      'CD0001-00',
      'Departmant',
      'Post Department in Khmelnytskyi',
      'Svoboda str, 23, Khmelnytskyi, Ukraine',
      '111-111-11-11',
      'assets/department.jpg',
      'Some description',
      'CD0001',
      []
    ),
    new PostDepartment(
      'CD0001-01',
      'Departmant',
      'Post Department in Lviv',
      'Shevchenko str, 6, Lviv, Ukraine',
      '111-111-11-22',
      'assets/department.jpg',
      'Some description',
      'CD0001',
      []
    ),
    new PostDepartment(
      'CD0002-00',
      'Departmant',
      'Ukr Post Department in Khmelnytskyi',
      'Zarichna str, 11/2, Khmelnytskyi, Ukraine',
      '222-222-22-11',
      'assets/department.jpg',
      'Some description',
      'CD0002',
      []
    ),
    new PostDepartment(
      'CD0002-01',
      'Departmant',
      'Ukr Post Department in Poltava',
      'Peremogy str, 16, Poltava, Ukraine',
      '222-222-222-22',
      'assets/department.jpg',
      'Some description',
      'CD0002',
      []
    ),
  ];
  constructor() { }
  add(client: PostDepartment): void {
    this.postDepartmentList.push(client);
  }
  remove(client: PostDepartment): void {
    try {
      const index = this.postDepartmentList.indexOf(client);
      this.postDepartmentList.splice(index, 1);
    } catch  {
      console.log('Item not found');
    }
  }
}
