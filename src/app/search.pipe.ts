import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list:any[], item:string):any {
    return list.filter((x)=> x.title.toLowerCase().includes(item.toLowerCase()));
  }

}
