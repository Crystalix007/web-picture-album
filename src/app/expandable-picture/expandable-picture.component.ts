import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FullScreenComponent } from './full-screen/full-screen.component';

@Component({
  selector: 'app-expandable-picture',
  templateUrl: './expandable-picture.component.html',
  styleUrls: ['./expandable-picture.component.scss'],
})
export class ExpandablePictureComponent {
  @Input()
  src: string =
    'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  constructor(private dialog: MatDialog) {}

  expand: () => void = () => {
    this.dialog.open(FullScreenComponent, {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      data: {
        src: this.src,
      },
    });
  };
}
