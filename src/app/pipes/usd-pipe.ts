import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usd',
  standalone: true
})
export class UsdPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) {
      return '$0.00';
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  }
}