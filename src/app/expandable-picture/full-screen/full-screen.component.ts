import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss'],
})
export class FullScreenComponent {
  @Input()
  src?: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: { src?: string }) {
    this.src = data.src;
  }
}
