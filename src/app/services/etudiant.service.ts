import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = 'http://localhost:8000/api'; // Assurez-vous que cette URL est correcte

  constructor(private http: HttpClient) { }

  getEtudiants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/etudiants`);
  }

  createEtudiant(etudiant: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/etudiants`, etudiant);
  }

  getEtudiantsByClasse(classeId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/etudiants/classe/${classeId}`);
  }

  getClasses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/classes`);
  }
}
