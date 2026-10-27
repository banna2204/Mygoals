import { Component, inject, signal } from '@angular/core';
import { CommonClass } from '../../directives/common-class';
import { NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface User {
  id: number;
  role: string;
}

interface Query {
  title: string;
}

@Component({
  selector: 'app-test',
  imports: [CommonClass, NgTemplateOutlet, RouterModule],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {
  isActive = signal<boolean>(false);
  router = inject(ActivatedRoute);
  staticData = signal<User| null>(null)
  query = signal<Query | undefined>({title:''});

  ngOnInit() {
    const data = this.router?.snapshot?.data as User;
    this.staticData.set(data);

    this.router.queryParams.subscribe((data)=>{
      this.query.set(data as Query);
    })
  }
}
