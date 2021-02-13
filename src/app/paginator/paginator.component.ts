import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() page: number | null;
  @Input() hasMore: boolean;

  @Output() newPage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  emitNewPage(newPage: number) {
    console.log(newPage);
    this.newPage.emit(newPage);
  }

}
