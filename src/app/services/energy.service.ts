import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  public getMultas(payload:any){
    const headers = new HttpHeaders({
        'Cookie': 'ASP.NET_SessionId=xg3d5j55fcv43p45pagmol55; TS01f7ad7d=012c9738f3be9754083107b3f5435e15ef515acd926c10b33d5a4d5edb650b4394360d73c7854cb9742b1ba85151e6e4b5031c01ff; TS01f2d996=012c9738f34d19869ecfbbdb483c32a5160938a720250201bf30da02667e221e8e0d69b42fff9efb49e9bddfa19736d142d81275fe; _ga=GA1.2.1496228493.1642448946; _gid=GA1.2.128256167.1642448946; Rbtc-SbikHiQXFwC9DmY+0i4Y85Y0LI_=v1BdMwgw__Wg8; TS012df901=012c9738f3c2f54d29ddcd50b3e357f1cf2de063ae9dcba3ebb058eb0e369002908cb4c2ce31ec1bb47cf7bf031d27559ce93d4da7',
        'Host': 'ventanilla.dirtrab.cl',
        'Origin': 'https://ventanilla.dirtrab.cl',
        'Referer': 'https://ventanilla.dirtrab.cl/RegistroEmpleador/consultamultas.aspx',
        'Sec-Fetch-Mode': 'cors'
      
    })

    return this.http.post('https://ventanilla.dirtrab.cl/RegistroEmpleador/consultamultas.aspx', payload, {headers})
}
}
