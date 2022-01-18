import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { ILinkGovernment } from '../core/interfaces/link-government.interface';
import { MainFactoryService } from '../core/services/main-factory.service';
import { ICarousel } from '../core/interfaces/carousel.interface';
import { EnergyService } from '../services/energy.service';
import { IDistributors } from '../core/interfaces/distributors.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, DoCheck {

  linkGovermentList: ILinkGovernment[];
  carouselImageList: ICarousel[];
  listDistributors: IDistributors[];
  listOptions:any;
  distribuitorsImg:any;
  arrayPuchase:any;

  constructor(
    private mainFactory: MainFactoryService,
    private energyService: EnergyService
  ) {
    this.arrayPuchase =[];
    this.linkGovermentList = mainFactory.guvernamentImages;
    this.carouselImageList = mainFactory.carouselImages;
    this.listOptions= mainFactory.optionList;
    // this.distribuitorsImg = [
    //   { name: 'lipigas', img: 'assets/images/distributors/logo-lipigas.png',webPage:'https://lipitienda.lipigas.cl/', tipo:'compra'},
    //   { name: 'metrogas', img: 'assets/images/distributors/logo-metrogas.png' ,webPage:'http://www.metrogas.cl/', tipo:'venta'},
    //   { name: 'gasco', img: 'assets/images/distributors/logo-gasco.png',webPage:'https://gasco.cl/', tipo:'compra'},
    //   { name: 'abastible', img: 'assets/images/distributors/logo-abastible.png',webPage:'https://www.abastible.cl/', tipo:'compra'},
    //   { name: 'gas sur', img: 'assets/images/distributors/logo-gassur.png',webPage:'https://www.gassur.cl/' , tipo :'venta'},
    //   { name: 'intergas s.a.', img: 'assets/images/distributors/logo-intergas.png',webPage:'https://www.intergas.cl/', tipo:'compra'},
    //   { name: 'gasco magallanes', img: 'assets/images/distributors/logo-gascomagallanes.png',webPage:'https://www.gascomagallanes.cl/',tipo:'compra'},
    //   { name: 'uligas', img: 'assets/images/distributors/logo-uligas.png',webPage:'https://uligas.cl/' ,tipo:'compra'},
    //   { name: 'gas hn', img: 'assets/images/distributors/logo-gashn.png', webPage:'https://www.gashn.cl/', tipo:'compra' },
    //   { name: 'gas maule', img: 'assets/images/distributors/logo-gasmaule.png', webPage:'https://www.gasmaule.cl/' , tipo:'venta'},
    //   { name: 'gasvalpo', img: 'assets/images/distributors/logo-gasvalpo.png' , webPage:'https://www.gasvalpo.cl/', tipo:'compra' }
    // ]
  
  // this.handleRemoveItem(this.distribuitorsImg, this.distribuitorsImg[5])
  // this.handleGetPuchase(this.distribuitorsImg)
  }

  ngOnInit(): void {
    this.getBrands();
    this.getMultas();
  }

  ngDoCheck(): void {
    this.listDistributors = this.mainFactory.setListDistribuitors();
  }

  private getBrands(): void {
    this.energyService.getBrands().subscribe(response => {
      if (response.estado = 'OK') {
        this.mainFactory.getListDistributors(response.data);
      }
      else {
        this.listDistributors = [];
      }
    }, error => {
      console.log('getBrands', error);
    })
  }

  private getMultas(){
    const payload ={
      __EVENTTARGET: 'btnConsulta',
      __EVENTARGUMENT:'',
      __VIEWSTATE: 'dDw0MzU3ODc0MDU7dDw7bDxpPDE%2BOz47bDx0PDtsPGk8NT47PjtsPHQ8cDxwPGw8X2FlOz47bDxidG5Db25zdWx0YTs%2BPjs%2BO2w8aTwxPjtpPDM%2BO2k8NT47aTw3PjtpPDk%2BOz47bDx0PHA8cDxsPEJhY2tDb2xvcjtfIVNCOz47bDwyPDI1NSwgMjU1LCAyNTU%2BO2k8OD47Pj47Pjs7Pjt0PHA8O3A8bDxvbmNsaWNrOz47bDxBamF4TlMuQVIoJ2J0bkNvbnN1bHRhJywgJycsICdSYWRBamF4UGFuZWwxJywgZXZlbnQpXDsgcmV0dXJuIGZhbHNlXDs7Pj4%2BOzs%2BO3Q8cDxwPGw8VGV4dDtWaXNpYmxlOz47bDxNVUxUQVMgUEFHQURBUyBZIEVOIFRSw4FNSVRFIERFIENPQlJBTlpBIERFIExBIEVNUFJFU0E6XDxiclw%2BXDx1XD5SVVQ6XDwvdVw%2BIDk2NTU2OTQwLTVcPGJyXD5cPHVcPlJhesOzbiBzb2NpYWw6XDwvdVw%2BIFBST1ZFRURPUkVTIElOVEVHUkFMRVMgUFJJU0EgUy5BXDxiclw%2BXDx1XD5tdWx0YXMgZW5jb250cmFkYXM6XDwvdVw%2BIDNcPGJyXD5cPHVcPmZlY2hhIGRlIGNvbnN1bHRhOlw8L3VcPiAxNy0wMS0yMDIyIDE4OjA5OjQ4O288dD47Pj47Pjs7Pjt0PDtsPGk8Mz47PjtsPHQ8cDxwPGw8UmFkQ29udHJvbHNEaXI7PjtsPH4vUmFkQ29udHJvbHMvOz4%2BOz47Oz47Pj47dDxAMDxAMDxwPHA8bDxWaXNpYmxlO0VkaXRJbmRleGVzO1NlbGVjdGVkSW5kZXhlczs%2BO2w8bzx0PjtsPD47bDw%2BOz4%2BOz47aDxfIUl0ZW1Db3VudDtpPDE%2BOz47PjtsPGw8cDxpPDc%2BO0AwPEAwPHA8bDxEYXRhVHlwZTtvaW5kOz47bDxiPEFBRUFBQUQvLy8vL0FRQUFBQUFBQUFBRUFRQUFBQjlUZVhOMFpXMHVWVzVwZEhsVFpYSnBZV3hwZW1GMGFXOXVTRzlzWkdWeUF3QUFBQVJFWVhSaENWVnVhWFI1Vkhsd1pReEJjM05sYldKc2VVNWhiV1VCQUFFSUJnSUFBQUFOVTNsemRHVnRMbE4wY21sdVp3UUFBQUFHQXdBQUFFNXRjMk52Y214cFlpd2dWbVZ5YzJsdmJqMHhMakF1TlRBd01DNHdMQ0JEZFd4MGRYSmxQVzVsZFhSeVlXd3NJRkIxWW14cFkwdGxlVlJ2YTJWdVBXSTNOMkUxWXpVMk1Ua3pOR1V3T0RrTD47aTwyPjs%2BPjs7OztQUk9DRURFTkNJQTs%2BO0AwPHA8bDxEYXRhVHlwZTtvaW5kOz47bDxiPEFBRUFBQUQvLy8vL0FRQUFBQUFBQUFBRUFRQUFBQjlUZVhOMFpXMHVWVzVwZEhsVFpYSnBZV3hwZW1GMGFXOXVTRzlzWkdWeUF3QUFBQVJFWVhSaENWVnVhWFI1Vkhsd1pReEJjM05sYldKc2VVNWhiV1VCQUFFSUJnSUFBQUFOVTNsemRHVnRMbE4wY21sdVp3UUFBQUFHQXdBQUFFNXRjMk52Y214cFlpd2dWbVZ5YzJsdmJqMHhMakF1TlRBd01DNHdMQ0JEZFd4MGRYSmxQVzVsZFhSeVlXd3NJRkIxWW14cFkwdGxlVlJ2YTJWdVBXSTNOMkUxWXpVMk1Ua3pOR1V3T0RrTD47aTwzPjs%2BPjs7OztNVUxUQTs%2BO0AwPHA8bDxEYXRhVHlwZTtvaW5kOz47bDxiPEFBRUFBQUQvLy8vL0FRQUFBQUFBQUFBRUFRQUFBQjlUZVhOMFpXMHVWVzVwZEhsVFpYSnBZV3hwZW1GMGFXOXVTRzlzWkdWeUF3QUFBQVJFWVhSaENWVnVhWFI1Vkhsd1pReEJjM05sYldKc2VVNWhiV1VCQUFFSUJnSUFBQUFOVTNsemRHVnRMbE4wY21sdVp3UUFBQUFHQXdBQUFFNXRjMk52Y214cFlpd2dWbVZ5YzJsdmJqMHhMakF1TlRBd01DNHdMQ0JEZFd4MGRYSmxQVzVsZFhSeVlXd3NJRkIxWW14cFkwdGxlVlJ2YTJWdVBXSTNOMkUxWXpVMk1Ua3pOR1V3T0RrTD47aTw0Pjs%2BPjs7OztFU1RBRE87PjtAMDxwPGw8RGF0YVR5cGU7b2luZDs%2BO2w8YjxBQUVBQUFELy8vLy9BUUFBQUFBQUFBQUVBUUFBQUI5VGVYTjBaVzB1Vlc1cGRIbFRaWEpwWVd4cGVtRjBhVzl1U0c5c1pHVnlBd0FBQUFSRVlYUmhDVlZ1YVhSNVZIbHdaUXhCYzNObGJXSnNlVTVoYldVQkFBRUlCZ0lBQUFBTlUzbHpkR1Z0TGxOMGNtbHVad1FBQUFBR0F3QUFBRTV0YzJOdmNteHBZaXdnVm1WeWMybHZiajB4TGpBdU5UQXdNQzR3TENCRGRXeDBkWEpsUFc1bGRYUnlZV3dzSUZCMVlteHBZMHRsZVZSdmEyVnVQV0kzTjJFMVl6VTJNVGt6TkdVd09Ea0w%2BO2k8NT47Pj47Ozs7RkVDSEEgRUpFQ1VUT1JJRURBRDs%2BO0AwPHA8bDxEYXRhVHlwZTtvaW5kOz47bDxiPEFBRUFBQUQvLy8vL0FRQUFBQUFBQUFBRUFRQUFBQjlUZVhOMFpXMHVWVzVwZEhsVFpYSnBZV3hwZW1GMGFXOXVTRzlzWkdWeUF3QUFBQVJFWVhSaENWVnVhWFI1Vkhsd1pReEJjM05sYldKc2VVNWhiV1VCQUFFSUJnSUFBQUFPVTNsemRHVnRMa1JsWTJsdFlXd0VBQUFBQmdNQUFBQk9iWE5qYjNKc2FXSXNJRlpsY25OcGIyNDlNUzR3TGpVd01EQXVNQ3dnUTNWc2RIVnlaVDF1WlhWMGNtRnNMQ0JRZFdKc2FXTkxaWGxVYjJ0bGJqMWlOemRoTldNMU5qRTVNelJsTURnNUN3PT0%2BO2k8Nj47Pj47Ozs7Tm8uIFVNIEZJTkFMOz47QDA8cDxsPERhdGFUeXBlO29pbmQ7PjtsPGI8QUFFQUFBRC8vLy8vQVFBQUFBQUFBQUFFQVFBQUFCOVRlWE4wWlcwdVZXNXBkSGxUWlhKcFlXeHBlbUYwYVc5dVNHOXNaR1Z5QXdBQUFBUkVZWFJoQ1ZWdWFYUjVWSGx3WlF4QmMzTmxiV0pzZVU1aGJXVUJBQUVJQmdJQUFBQU5VM2x6ZEdWdExsTjBjbWx1WndRQUFBQUdBd0FBQUU1dGMyTnZjbXhwWWl3Z1ZtVnljMmx2YmoweExqQXVOVEF3TUM0d0xDQkRkV3gwZFhKbFBXNWxkWFJ5WVd3c0lGQjFZbXhwWTB0bGVWUnZhMlZ1UFdJM04yRTFZelUyTVRrek5HVXdPRGtMPjtpPDc%2BOz4%2BOzs7O1RJUE8gVU07PjtAMDxwPGw8RGF0YVR5cGU7b2luZDs%2BO2w8YjxBQUVBQUFELy8vLy9BUUFBQUFBQUFBQUVBUUFBQUI5VGVYTjBaVzB1Vlc1cGRIbFRaWEpwWVd4cGVtRjBhVzl1U0c5c1pHVnlBd0FBQUFSRVlYUmhDVlZ1YVhSNVZIbHdaUXhCYzNObGJXSnNlVTVoYldVQkFBRUlCZ0lBQUFBTlUzbHpkR1Z0TGxOMGNtbHVad1FBQUFBR0F3QUFBRTV0YzJOdmNteHBZaXdnVm1WeWMybHZiajB4TGpBdU5UQXdNQzR3TENCRGRXeDBkWEpsUFc1bGRYUnlZV3dzSUZCMVlteHBZMHRsZVZSdmEyVnVQV0kzTjJFMVl6VTJNVGt6TkdVd09Ea0w%2BO2k8OD47Pj47Ozs7RU5VTkNJQURPOz47Pj47O1xlO0AwPD47VGVsZXJpay5XZWJDb250cm9scy5HcmlkQ2hpbGRMb2FkTW9kZSwgUmFkR3JpZCwgVmVyc2lvbj01LjEuMy4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPW51bGw8U2VydmVyT25EZW1hbmQ%2BO0AwPDs7Ozs7Ozs%2BO1RlbGVyaWsuV2ViQ29udHJvbHMuR3JpZEVkaXRNb2RlLCBSYWRHcmlkLCBWZXJzaW9uPTUuMS4zLjAsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49bnVsbDxFZGl0Rm9ybXM%2BO3A8bDxfZWZzOz47bDxwPGw8X2VjYzs%2BO2w8Oz4%2BOz4%2BOztwPGw8XyFDSVM7X2hsbTtEYXRhS2V5cztEYXRhTWVtYmVyOz47bDxoPD47NTA8U2VydmVyT25EZW1hbmQ%2BO2w8PjtcZTs%2BPjs%2BO2k8MD47Pjs7Ozs7Ozs7Ozs7Oz47bDxpPDA%2BO2k8MT47aTwyPjs%2BO2w8dDxAMDw7Ozs%2BOzs%2BO3Q8bDxAMDxwPHA8bDxfIUNJUztfaGxtO0RhdGFLZXlzO0RhdGFNZW1iZXI7PjtsPGg8Pjs1MDxTZXJ2ZXJPbkRlbWFuZD47bDw%2BO1xlOz4%2BOz47aDxDdXJyZW50UGFnZUluZGV4O2k8MD47XyFJdGVtQ291bnQ7aTwzPjtfIURTSUM7aTwzPjtfIVBDb3VudDtpPDE%2BOz47PjtwPGw8X3NlOz47bDxwPGw8X2M7PjtsPGk8MD47Pj47Pj47O2w8Ozs7Ozs7Oz47PjtsPGk8MD47PjtsPHQ8O2w8aTwwPjtpPDE%2BO2k8Mj47aTw0PjtpPDY%2BOz47bDx0PDtsPGk8MD47aTwxPjs%2BO2w8dDxwPHA8bDxWaXNpYmxlOz47bDxvPGY%2BOz4%2BOz47bDxpPDA%2BOz47bDx0PHA8cDxsPENvbHVtblNwYW47PjtsPGk8Nz47Pj47Pjs7Pjs%2BPjt0PDtsPGk8MD47aTwxPjtpPDI%2BO2k8Mz47aTw0PjtpPDU%2BO2k8Nj47aTw3PjtpPDg%2BOz47bDx0PHA8cDxsPFRleHQ7PjtsPCZuYnNwXDs7Pj47Pjs7Pjt0PHA8cDxsPFRleHQ7PjtsPCZuYnNwXDs7Pj47Pjs7Pjt0PHA8cDxsPFRleHQ7PjtsPFBST0NFREVOQ0lBOz4%2BOz47Oz47dDxwPHA8bDxUZXh0Oz47bDxNVUxUQTs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8RVNUQURPOz4%2BOz47Oz47dDxwPHA8bDxUZXh0Oz47bDxGRUNIQSBFSkVDVVRPUklFREFEOz4%2BOz47Oz47dDxwPHA8bDxUZXh0Oz47bDxOwrAgVU0gRklOQUw7Pj47Pjs7Pjt0PHA8cDxsPFRleHQ7PjtsPFRJUE8gVU07Pj47Pjs7Pjt0PHA8cDxsPFRleHQ7PjtsPEVOVU5DSUFETzs%2BPjs%2BOzs%2BOz4%2BOz4%2BO3Q8O2w8aTwwPjtpPDE%2BO2k8Mj47PjtsPHQ8O2w8aTwwPjtpPDE%2BO2k8Mj47aTwzPjtpPDQ%2BO2k8NT47aTw2PjtpPDc%2BO2k8OD47PjtsPHQ8cDxwPGw8VGV4dDs%2BO2w8Jm5ic3BcOzs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8Jm5ic3BcOzs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8Jm5ic3BcOzs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8Jm5ic3BcOzs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8Jm5ic3BcOzs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8Jm5ic3BcOzs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8Jm5ic3BcOzs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8Jm5ic3BcOzs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8Jm5ic3BcOzs%2BPjs%2BOzs%2BOz4%2BO3Q8O2w8aTwwPjs%2BO2w8dDxwPHA8bDxDb2x1bW5TcGFuOz47bDxpPDc%2BOz4%2BOz47Oz47Pj47dDxwPHA8bDxWaXNpYmxlOz47bDxvPGY%2BOz4%2BOz47bDxpPDA%2BOz47bDx0PHA8cDxsPENvbHVtblNwYW47VmVydGljYWxBbGlnbjtIb3Jpem9udGFsQWxpZ247XyFTQjs%2BO2w8aTw3PjtTeXN0ZW0uV2ViLlVJLldlYkNvbnRyb2xzLlZlcnRpY2FsQWxpZ24sIFN5c3RlbS5XZWIsIFZlcnNpb249MS4wLjUwMDAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iMDNmNWY3ZjExZDUwYTNhPFRvcD47U3lzdGVtLldlYi5VSS5XZWJDb250cm9scy5Ib3Jpem9udGFsQWxpZ24sIFN5c3RlbS5XZWIsIFZlcnNpb249MS4wLjUwMDAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iMDNmNWY3ZjExZDUwYTNhPExlZnQ%2BO2k8MTk2NjA4Pjs%2BPjs%2BOzs%2BOz4%2BOz4%2BO3Q8cDxwPGw8X2lpaDs%2BO2w8MDs%2BPjs%2BO2w8aTwwPjtpPDE%2BO2k8Mj47aTwzPjtpPDQ%2BO2k8NT47aTw2PjtpPDc%2BO2k8OD47PjtsPHQ8O2w8aTwwPjs%2BO2w8dDxwPDtwPGw8b25jbGljazs%2BO2w8QWpheE5TLkFSKCdncmQ6X2N0bDE6X2N0bDQ6R0VDQnRuRXhwYW5kQ29sdW1uJywgJycsICdSYWRBamF4UGFuZWwxJywgZXZlbnQpXDsgcmV0dXJuIGZhbHNlXDs7Pj4%2BOzs%2BOz4%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8Jm5ic3BcOzs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8RklTQ0FMSVpBQ0lPTjs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8ODU3MS8xOS8wNTItMTs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8UEFHQURBOz4%2BOz47Oz47dDxwPHA8bDxUZXh0Oz47bDwyMC0xMS0yMDIwOz4%2BOz47Oz47dDxwPHA8bDxUZXh0Oz47bDw0MCwwMDs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8VVRNOz4%2BOz47Oz47dDxwPHA8bDxUZXh0Oz47bDxObyBjb25zaWduYXIgcG9yIGVzY3JpdG8gbGFzIG1vZGlmaWNhY2lvbmVzIGRlbCBjb250cmF0byBkZSB0cmFiYWpvLjs%2BPjs%2BOzs%2BOz4%2BO3Q8cDxwPGw8X2lpaDs%2BO2w8MTs%2BPjs%2BO2w8aTwwPjtpPDE%2BO2k8Mj47aTwzPjtpPDQ%2BO2k8NT47aTw2PjtpPDc%2BO2k8OD47PjtsPHQ8O2w8aTwwPjs%2BO2w8dDxwPDtwPGw8b25jbGljazs%2BO2w8QWpheE5TLkFSKCdncmQ6X2N0bDE6X2N0bDY6R0VDQnRuRXhwYW5kQ29sdW1uJywgJycsICdSYWRBamF4UGFuZWwxJywgZXZlbnQpXDsgcmV0dXJuIGZhbHNlXDs7Pj4%2BOzs%2BOz4%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8Jm5ic3BcOzs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8UkVDTEFNTzs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8MzM0NS8xOC8xMjUtMTs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8UEFHQURBOz4%2BOz47Oz47dDxwPHA8bDxUZXh0Oz47bDwxNi0wMi0yMDE5Oz4%2BOz47Oz47dDxwPHA8bDxUZXh0Oz47bDwyLDAwOz4%2BOz47Oz47dDxwPHA8bDxUZXh0Oz47bDxJTU07Pj47Pjs7Pjt0PHA8cDxsPFRleHQ7PjtsPE5vIGV4aGliaXIgdG9kYSBsYSBkb2N1bWVudGFjacOzbiBuZWNlc2FyaWEgcGFyYSBlZmVjdHVhciBsYXMgbGFib3JlcyBkZSBmaXNjYWxpemFjacOzbi47Pj47Pjs7Pjs%2BPjt0PHA8cDxsPF9paWg7PjtsPDI7Pj47PjtsPGk8MD47aTwxPjtpPDI%2BO2k8Mz47aTw0PjtpPDU%2BO2k8Nj47aTw3PjtpPDg%2BOz47bDx0PDtsPGk8MD47PjtsPHQ8cDw7cDxsPG9uY2xpY2s7PjtsPEFqYXhOUy5BUignZ3JkOl9jdGwxOl9jdGw4OkdFQ0J0bkV4cGFuZENvbHVtbicsICcnLCAnUmFkQWpheFBhbmVsMScsIGV2ZW50KVw7IHJldHVybiBmYWxzZVw7Oz4%2BPjs7Pjs%2BPjt0PHA8cDxsPFRleHQ7PjtsPCZuYnNwXDs7Pj47Pjs7Pjt0PHA8cDxsPFRleHQ7PjtsPEZJU0NBTElaQUNJT047Pj47Pjs7Pjt0PHA8cDxsPFRleHQ7PjtsPDQwNzYvMTYvMDY4LTE7Pj47Pjs7Pjt0PHA8cDxsPFRleHQ7PjtsPFBBR0FEQTs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8MjEtMDUtMjAxNzs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8MzYsMDA7Pj47Pjs7Pjt0PHA8cDxsPFRleHQ7PjtsPFVUTTs%2BPjs%2BOzs%2BO3Q8cDxwPGw8VGV4dDs%2BO2w8Tm8gY29udGFyIGxhcyBncsO6YXMsIGNhbWlvbmVzIHkgc2ltaWxhcmVzIGNvbiBhbGFybWEgZGUgcmV0cm9jZXNvIHRpcG8gc29ub3JvLjs%2BPjs%2BOzs%2BOz4%2BOz4%2BOz4%2BO3Q8bDxpPDE4Pjs7Pjs7Pjs%2BPjs%2BPjs%2BPjs%2BPjtsPGdyZDtSYWRBamF4UGFuZWwxO2dyZDpfY3RsMTpfY3RsNDpHRUNCdG5FeHBhbmRDb2x1bW47Z3JkOl9jdGwxOl9jdGw2OkdFQ0J0bkV4cGFuZENvbHVtbjtncmQ6X2N0bDE6X2N0bDg6R0VDQnRuRXhwYW5kQ29sdW1uOz4%2BOizFd7kvXISimaptsPz%2FnFH00Vo%3D',
      __VIEWSTATEGENERATOR: 'EE3D4DEF',
     RadAjaxPanel1PostDataValue:'',
     tbxRut: '96556940-5',
     RadAJAXControlID: 'RadAjaxPanel1',
     httprequest: true
    }
    this.energyService.getMultas(payload).subscribe(resp=>{
      console.log(resp);
    })
  }

  // handleRemoveItem(array:any , indexElementDelete: any){
  //   const index = array.indexOf(indexElementDelete);
  // if (index > -1) {
  //   array.splice(index, 1);
  // }
  //  console.log(array);
  // }

  // handleGetPuchase(array:any){
  //   array.map(distribuidoras=> {
  //     if(distribuidoras.tipo === 'compra'){
  //       this.arrayPuchase.push(distribuidoras)
  //     }
  //   })
  //   console.log(this.arrayPuchase);
  // }
}
