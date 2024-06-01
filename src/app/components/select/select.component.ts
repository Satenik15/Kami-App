import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ISortParams } from '../../models/sortParams';
import { Sort } from '../../models/sort.enum';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgSelectModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() items: ISortParams[] = [];
  @Input() selectedItem!: ISortParams;
  @Output() onSelect: EventEmitter<ISortParams> = new EventEmitter<ISortParams>();

  Sort = Sort;

  ngOnInit(): void {
  }
}
