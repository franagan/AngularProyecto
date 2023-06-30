import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter(item => {
      return item.title.toLowerCase().includes(searchTerm);
    });
  }
}



// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filterMovie'
// })
// export class FilterMoviePipe implements PipeTransform {

//   transform(list: string[], searchTerm: string=''): string[] {
//     const lowerCaseFilter: string = searchTerm.toLowerCase().trim();

//     const filteredList: string[] = list.filter((el: string) => {
//       return el.toLowerCase().includes(lowerCaseFilter);
//     })
//     return filteredList;
//   }

// }
