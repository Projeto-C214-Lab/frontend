import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private http: HttpClient) { }

  RealizarConversao(): Observable<any>{
    const apiKey = "7fJmthJ5y54Tb2QPTOvfcANcrSlozkosssGs";
    const url = `https://currencyapi.net/api/v1/rates?key=${apiKey}&base=USD`;

    return this.http.get<any>(url);
  }
}
