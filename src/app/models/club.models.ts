export class Club {
    id :number;
    Club_name :string ;
    Activity : string;
    Location :string ;
    Tel : number;
    Opdate:Date;
    Description:string;
  
  constructor(
    clubname:string ,
    activity: string ,
    location: string ,
    tel:number ,
    opdate: Date,
    descri: string
      ){
  this.Club_name=clubname;
  this.Activity=activity;
  this.Location= location;
  this.Tel=tel;
  this.Opdate=opdate;
  this.Description=descri;
}

}
