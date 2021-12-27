import { Component, Input } from '@angular/core';
import { ILinkGovernment } from 'src/app/core/interfaces/link-government.interface';


@Component({
  selector: 'app-links-government',
  templateUrl: './links-government.component.html',
  styleUrls: ['./links-government.component.scss']
})
export class LinksGovernmentComponent {

@Input() listLinks: ILinkGovernment[];
  constructor() {}

}
