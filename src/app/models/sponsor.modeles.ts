export class sponsor{
  id:number;
  Libelle:string ;
  budget: number;
  idclubs:number [] ;
	iduser: number;


constructor(
  Libelle:string ,
  budget: number,
  idclubs:number [] ,
	iduser: number){
this.Libelle=Libelle;
this.budget=budget;
this.idclubs=idclubs;
this.iduser=iduser

  }



}
