import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgFor, SlicePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgFor, SlicePipe, FontAwesomeModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit, OnChanges {
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();
  @Input() pagesLength: number = 0;
  @Input() currentPage: number = 1;
  @Input() limit = 10;

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  paginationData: number[] = [];
  startIndex: number = 0;
  endIndex: number = 5;

  ngOnInit(): void {
    setTimeout(() => {
      this.updatePagination();
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pagesLength'] && !changes['pagesLength'].firstChange) {
      this.updatePagination();
    }
  }

  updatePagination() {
    if (this.pagesLength && this.pagesLength > this.limit) {
      this.paginationData = Array.from(Array(Math.ceil(this.pagesLength / this.limit)).fill(1)); 
    }
  }

  changePage(action: string) {
    switch (action) {
      case '+':
        this.currentPage++;
        break;
      case '-':
        this.currentPage--;
        break;
    }
    this.onChangePage.emit(this.currentPage);
  }

  changePageTo(page: number) {
    this.currentPage = page;
    this.onChangePage.emit(this.currentPage);
  }
}
