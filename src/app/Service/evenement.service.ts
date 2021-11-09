
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  constructor(private http:HttpClient) { }
getevenements():Observable<any>{
  return this.http.get<any>(environment.baseUrl+environment.evenementlisturl);
}

addevenement(Libelle:string,Nbre_de_places:string,Localisation:string,Duree:string,evenementimage:File,idclub:string): Observable<any>{
const formdata : FormData = new FormData();
formdata.append("Libelle",Libelle);
formdata.append("Nbre_de_places",Nbre_de_places);
formdata.append("Localisation",Localisation);
formdata.append("Duree",Duree);
formdata.append("file",evenementimage);
formdata.append("idclub",idclub);

return this.http.post<any>("http://localhost:8080/api/addevenement" ,formdata);
}
updateevenement(Libelle:string,Nbre_de_places:string,Localisation:string,Duree:string,evenementimage:File,idclub:string): Observable<any>{
  const formdata : FormData = new FormData();
formdata.append("Libelle",Libelle);
formdata.append("Nbre_de_places",Nbre_de_places);
formdata.append("Localisation",Localisation);
formdata.append("Duree",Duree);
formdata.append("file",evenementimage);
formdata.append("idclub",idclub);

  return this.http.put<any>(environment.baseUrl+environment.updateevenementUrl,formdata);
  }

deleteevenement(idevenement:string):Observable<any>{
return this.http.delete<any>(environment.baseUrl+environment.deleteevenementUrl+"?idevenement="+idevenement)
}
getevenement(idevenement:string):Observable<any>{
return this.http.get<any>(environment.baseUrl+environment.viewevenementUrl+"?idevenement="+idevenement)
}
}

