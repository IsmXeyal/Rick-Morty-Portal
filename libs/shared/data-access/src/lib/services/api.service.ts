import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@rick-morty-portal/shared-util';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = environment.apiBaseUrl;
  private readonly http = inject(HttpClient);

  public getAll<T>(endpoint: string) {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }

  public getById<T>(endpoint: string, id: number) {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}/${id}`);
  }
}
