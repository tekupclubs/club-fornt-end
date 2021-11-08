import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
constructor(private http:HttpClient) { }
getclubs():Observable<any>{
  return this.http.get<any>(environment.baseUrl+environment.clublisturl);
}

addclub(libelle:string,Activite:string,email:string,iduser:string,clubimage:File): Observable<any>{
const formdata : FormData = new FormData();
formdata.append("libelle",libelle);
formdata.append("Activite",Activite);
formdata.append("email",email);
formdata.append("iduser",iduser);
formdata.append("file",clubimage);
return this.http.post<any>("http://localhost:8080/api/addclub" ,formdata);
}
updateclub(libelle:string,Activite:string,email:string,idclub:string,clubimage:File): Observable<any>{
  const formdata : FormData = new FormData();
  formdata.append("libelle",libelle);
  formdata.append("Activite",Activite);
  formdata.append("email",email);
  formdata.append("iduser",idclub);
  formdata.append("file",clubimage);
  return this.http.put<any>(environment.baseUrl+environment.updateclubUrl,formdata);
  }

deleteclub(idclub:string):Observable<any>{
return this.http.delete<any>(environment.baseUrl+environment.deleteclubUrl+"?idclub="+idclub)
}
getclub(idclub:string):Observable<any>{
return this.http.get<any>(environment.baseUrl+environment.viewclubUrl+"?idclub="+idclub)
}
}
