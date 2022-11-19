import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  public imagen1:string="https://th.bing.com/th/id/R.fdd02bd3b03901b060fae9a4d9f94ab7?rik=%2f7%2b9sdBfEHgYNw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-Ql3wOYFNl_k%2fTbrRgr3sItI%2fAAAAAAAABZ4%2fVxkBzuNhOXs%2fs1600%2fBB131CumberlandSFN-NR.jpg&ehk=xVtIZDLMvGzLe%2f9FOsJPDv6duWR%2bds7RekzFGCsb09E%3d&risl=&pid=ImgRaw&r=0";
  public imagen2:string="https://th.bing.com/th/id/R.5df81ba18537780d3cbda6017a5f7f3d?rik=nx8idrF81X5a%2fw&riu=http%3a%2f%2fwww.periodistadigital.com%2fimagenes%2f2014%2f06%2f13%2fenterprise.jpg&ehk=EbGIb4Qu7wY%2fm3iRDEq1IdoTmElj4jxC3cnYKl%2fNEfA%3d&risl=&pid=ImgRaw&r=0";
  public imagen3:string="https://th.bing.com/th/id/OIP.p_Q2oeXHLsUbFsNMpB5sBgHaEK?pid=ImgDet&rs=1";

  constructor() { }

  ngOnInit(): void {
  }

}
