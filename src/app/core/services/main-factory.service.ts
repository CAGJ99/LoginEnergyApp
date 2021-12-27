import { Injectable } from '@angular/core';
import { ILinkGovernment } from '../interfaces/link-government.interface';
import { ICarousel } from '../interfaces/carousel.interface';
import { INavLinks } from '../interfaces/navlinks.interface';
import { IDistributors } from '../interfaces/distributors.interface';

@Injectable({
  providedIn: 'root'
})
export class MainFactoryService {
  listImg: any;
  listAtributorsWithImage: any[];
  distribuitorsImg: any[];

  constructor() {
    this.distribuitorsImg = [
      { name: 'lipigas', img: 'assets/images/distributors/logo-lipigas.png',webPage:'https://lipitienda.lipigas.cl/' },
      { name: 'metrogas', img: 'assets/images/distributors/logo-metrogas.png' ,webPage:'http://www.metrogas.cl/'},
      { name: 'gasco', img: 'assets/images/distributors/logo-gasco.png',webPage:'https://gasco.cl/' },
      { name: 'abastible', img: 'assets/images/distributors/logo-abastible.png',webPage:'https://www.abastible.cl/' },
      { name: 'gas sur', img: 'assets/images/distributors/logo-gassur.png',webPage:'https://www.gassur.cl/' },
      { name: 'intergas s.a.', img: 'assets/images/distributors/logo-intergas.png',webPage:'https://www.intergas.cl/' },
      { name: 'gasco magallanes', img: 'assets/images/distributors/logo-gascomagallanes.png',webPage:'https://www.gascomagallanes.cl/' },
      { name: 'uligas', img: 'assets/images/distributors/logo-uligas.png',webPage:'https://uligas.cl/' },
      { name: 'gas hn', img: 'assets/images/distributors/logo-gashn.png', webPage:'https://www.gashn.cl/' },
      { name: 'gas maule', img: 'assets/images/distributors/logo-gasmaule.png', webPage:'https://www.gasmaule.cl/'},
      { name: 'gasvalpo', img: 'assets/images/distributors/logo-gasvalpo.png' , webPage:'https://www.gasvalpo.cl/' }
    ]

  }

  public guvernamentImages: ILinkGovernment[] = [
    {
      name: 'direccion-publica',
      style: '../../../../assets/images/direccionPublica.jpeg',
      link: 'https://adp.serviciocivil.cl/concursos-spl/opencms/portada.html'
    },
    {
      name: 'ley-lobby',
      style: '../../../../assets/images/LeyLobby.jpeg',
      link: 'https://www.leylobby.gob.cl/instituciones/AU001'
    },
    {
      name: 'ley-transparencia',
      style: '../../../../assets/images/LeyTransparencia.jpeg',
      link: 'https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=AU001'
    },
    {
      name: 'pago-proveedores',
      style: '../../../../assets/images/Proveedores.jpeg',
      link: 'https://pagos.bancoestado.cl/ConsultaProveedores/login.aspx?MID=Nl1HmVUnFybDwC/1iG5uOa02/Yp1Us1v'
    }, {
      name: 'ruta-energica',
      style: '../../../../assets/images/RutaEnergica.jpeg',
      link: 'http://energiaabierta.cl/?s=ruta+energ%C3%A9tica+2018&t=estudios'
    },
    {
      name: 'seguridad-informacion',
      style: '../../../../assets/images/SeguridadDeLaInformacion.jpg',
      link: 'https://www.cne.cl/politicas-seguridad-de-la-informacion-de-la-cne/'
    },
    {
      name: 'tramites-disponibles',
      style: '../../../../assets/images/Tramites-disponibles.jpg',
      link: 'https://www.cne.cl/nuestros-servicios/tramites-disponibles/'
    },
    {
      name: 'ley-transparencia',
      style: '../../../../assets/images/Transparencia.jpeg',
      link: 'https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=AU001'
    },
  ]

  public carouselImages: ICarousel[] = [
    {
      linkImage: 'assets/images/carousel/avisoCNE.jpg',
      alt: 'Aviso sucursal',
      title: 'Aviso importante referente a la atencion al cliente',
      description: ''
    },
    {
      linkImage: 'assets/images/carousel/BannerLogo.jpg',
      alt: 'Logo',
      title: 'CNE emite Norma Técnica de Gas Natural Licuado Regasificado',
      description: 'La Comisión Nacional de Energía emitió la Norma Técnica para la Programación y Coordinación de la Operación de Unidades que utilicen Gas Natural Licuado Regasificado.'
    },
    {
      linkImage: 'assets/images/carousel/logoGema.png',
      alt: 'Gema',
      title: ' CNE lanzó plataforma de gestión de monitoreo de energía, GEMA',
      description: 'La Comisión Nacional de Energía realizó en agosto y septiembre los dos primeros talleres introductorios sobre el funcionamiento de la plataforma de gestión para el monitoreo de energía, GEMA',
    },
    {
      linkImage: 'assets/images/carousel/Licitaciones.jpg',
      alt: 'Aviso sucursal',
      title: 'GOBIERNO Y EMPRESAS LOGRAN PRECIO PROMEDIO DE 23,78 USD/MWh',
      description: '5 son las empresas generadoras adjudicatarias de este nuevo y exitoso proceso que ofertó 2.310 GWh/año de energía, y que permitirá abastecer a miles de hogares y pymes a partir del año 2026.'
    },
  ]

  public navLinks: INavLinks[] = [{
    label: 'dashboard',
    link: './dashboard',
    index: 0,
    name: 'Home'
  }, {
    label: 'reports',
    link: './reports',
    index: 1,
    name: 'Reportes'
  }
  ];


  public optionList:any=[
    {name:'Reporte diario', icon:'far fa-file-alt', link:'../reports'},
    {name:'Call centers', icon:'fas fa-headset', link:'../call-center'},
    {name:'Estaciones de servicios', icon:'fas fa-gas-pump'},
    {name:'Puntos de venta', icon:'fas fa-shopping-cart'},
    {name:'Tipos de energía', icon:'fas fa-fire-alt'}
  ]

  public gasListSelect:any =[
    { name:'Lipigas',  value: 'lipigas'},
    { name:'Abastible',  value: 'abastible'},
    { name:'Gasco Magallanes',  value: 'gasco magallanes'},
    { name:'Gas hn',  value: 'gas hn'},
  ]

  public getListDistributors(distributorsList:IDistributors[]){
    distributorsList.map(distriutors=>{
      distriutors.img =  this.distribuitorsImg.find(img => img.name === distriutors.marca_gas)
    });
    this.listAtributorsWithImage = distributorsList;
  }

  public setListDistribuitors(){
    return this.listAtributorsWithImage;
  }
}

