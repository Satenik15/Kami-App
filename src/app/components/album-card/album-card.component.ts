import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Color } from '../../models/color.enum';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss'
})
export class AlbumCardComponent {
  @Input() greatBox: boolean = false;

  Color = Color;
  colors: string[] = [Color.PURPLE, Color.PINK, Color.BLUE];
}
