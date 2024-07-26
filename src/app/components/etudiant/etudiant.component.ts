import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../../services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  etudiants: any[] = [];
  classes: any[] = [];
  newEtudiant: any = {};
  classeId: number | null = null;

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
    this.loadEtudiants();
    this.loadClasses();
  }

  loadEtudiants() {
    this.etudiantService.getEtudiants().subscribe(
      (data) => this.etudiants = data,
      (error) => console.error('Erreur lors du chargement des étudiants', error)
    );
  }

  loadClasses() {
    this.etudiantService.getClasses().subscribe(
      (data) => this.classes = data,
      (error) => console.error('Erreur lors du chargement des classes', error)
    );
  }

  onSubmit() {
    this.etudiantService.createEtudiant(this.newEtudiant).subscribe(
      (response) => {
        console.log('Étudiant ajouté avec succès', response);
        this.loadEtudiants();
        this.newEtudiant = {};
      },
      (error) => console.error('Erreur lors de l\'ajout de l\'étudiant', error)
    );
  }

  filterByClasse() {
    if (this.classeId) {
      this.etudiantService.getEtudiantsByClasse(this.classeId).subscribe(
        (data) => this.etudiants = data,
        (error) => console.error('Erreur lors du filtrage par classe', error)
      );
    } else {
      this.loadEtudiants();
    }
  }
}