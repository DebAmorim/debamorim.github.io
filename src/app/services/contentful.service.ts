import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environments'

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private cliente = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken
  })

  getAllEntries(): Observable<any>{
    return from(this.cliente.getEntries<any>());
  }

  getEntryById(id: string): Observable<any>{
    return from(this.cliente.getEntry<any>(id));
  }
}
