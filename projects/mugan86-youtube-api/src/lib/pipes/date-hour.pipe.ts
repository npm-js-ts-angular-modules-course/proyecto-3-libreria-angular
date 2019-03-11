import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateHour'
})
export class DateHourPipe implements PipeTransform {

  transform(data: string): string {
    const date = new Date(data);
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1 ;
    const year = date.getFullYear();

    const hour = date.getHours();
    const mins = date.getMinutes();
    return `${dayOfMonth}-${month}-${year} ${hour}:${mins}`;
  }

}
