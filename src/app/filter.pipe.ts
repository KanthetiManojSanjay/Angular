import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sName: string): any {
    if (sName === "") {
      return value;
    }
    const playersArray: any[] = []
    for (let i = 0; i <= value.length; i++) {
      let teamName = value[i].team;
      if (teamName.startsWith(sName)) {
        playersArray.push(teamName);
      }
    }
    return playersArray;
  }

}
