import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  seemoreBoin:string ="";
  transform(overview:string , limit:number): string{
    this.seemoreBoin = overview.split(' ').slice(0, limit).join(' ') ;

    return `${this.seemoreBoin} .`;
  }

}
