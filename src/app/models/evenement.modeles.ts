export class evenement{
    id :number;
    Libelle :string ;
    Nbre_de_places : number;
    Durée :number ;
    Localisation : string;
  
  
  constructor(
    Libelle:string ,
    Nbre_de_places: number ,
    Localisation: string ,
      Durée:number){
  this.Libelle=Libelle;
  this.Durée=Durée;
  this.Nbre_de_places= Nbre_de_places;
  this.Localisation=Localisation
  
    }
  
  
  
  }
  