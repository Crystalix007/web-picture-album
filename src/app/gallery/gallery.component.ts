import { Component, OnInit } from '@angular/core';
import { PreviewAPIService, Preview, Previews } from 'app/apis/preview-api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  previews: Previews = [];

  constructor(private previewAPI: PreviewAPIService) {}

  ngOnInit(): void {
    this.previewAPI.getPreviewList().subscribe({
      next: (previews) => { this.previews = previews; }
    });
  }

  getPreviewSrc(preview: Preview): string {
    return this.previewAPI.getPreviewURL(preview);
  }
}
