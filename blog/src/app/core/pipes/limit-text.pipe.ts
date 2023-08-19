import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText'
})
export class LimitTextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!value) return '';
    if (value.length <= 47) return value;

    return value.substr(0, 47) + '...';;
  }

}
