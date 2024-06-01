import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() updateValue: EventEmitter<string> = new EventEmitter<string>();
  @Input() type!: string;
  @Input() searchValue!: string;
  
  searchValue$ = new Subject<string>();
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.searchValue$
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe((value => this.updateValue.emit(value)))
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
