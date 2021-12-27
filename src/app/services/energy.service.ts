import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IResponse } from '../core/interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {

  constructor(private http : HttpClient) { }


  public getPointsOfSales(searchParameter:string){
     return this.http.get<IResponse>(`${environment.apiUrl}combustibles/calefaccion/puntosdeventa?token=${environment.accessToken}&callback=${searchParameter}`);
  }

  public getReports(dateReports:any){
    return this.http.get<IResponse>(`${environment.apiUrl}reporte/energia?token=${environment.accessToken}&fecha=${dateReports}`);
  }

  public getBrands(){
    return this.http.get<IResponse>(`${environment.apiUrl}combustibles/calefaccion/marcas?token=${environment.accessToken}`);
  }

  public getCallCenter(concept:any){
    return this.http.get<IResponse>(`${environment.apiUrl}combustibles/calefaccion/callcenters?token=${environment.accessToken}&marca=${concept}`)
  }

  public getCommune(){
    return this.http.get<IResponse>(`${environment.apiUrl}comunas?token=${environment.accessToken}`)
  }
  public getRegion(){
    return this.http.get<IResponse>(`${environment.apiUrl}regiones?token=${environment.accessToken}`)
  }
}
