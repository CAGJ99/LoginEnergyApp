import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: string, type: string): string {
    const IMAGES = {

      company: './assets/images/distributors/logo-gashn.png',
    };
    return value && value !== '' ? value : IMAGES[type];
  }

}
