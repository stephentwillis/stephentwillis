import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'URL'
})
export class UrlPipe implements PipeTransform {
    transform(value: string) {
        return value.replace('https://', '').replace('http://', '').replace('www.', '');
    }
}