import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'app/api.service';
import { Observable } from 'rxjs';

export interface Preview {
  id: number,
  name: string;
}

export type Previews = Preview[];

@Injectable({
  providedIn: 'root',
})
export class PreviewAPIService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  getPreviewList(): Observable<Previews> {
    return this.get<Previews>('previews');
  }

  getPreviewURL(preview: Preview) {
    return this.getURL(`/preview/${preview.id}`);
  }
}
