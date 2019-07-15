import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() pagination = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.pagination.emit('recipes');
  }

  setPagination(pagination: string) {
    this.pagination.emit(pagination);
  }

}
