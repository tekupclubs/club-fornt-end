export class evenement{
    id :number;
    Libelle :string ;
    Nbre_de_places : number;
    Duree :number ;
    Localisation : string;
  
  
  constructor(
    Libelle:string ,
    Nbre_de_places: number ,
    Localisation: string ,
      Duree:number){
  this.Libelle=Libelle;
  this.Duree=Duree;
  this.Nbre_de_places= Nbre_de_places;
  this.Localisation=Localisation
  
    }
  
  
  
  }
  