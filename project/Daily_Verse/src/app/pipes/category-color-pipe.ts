import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryColor',
  standalone: true
})
export class CategoryColorPipe implements PipeTransform {
  transform(category: string): string {
    switch (category) {
      case 'clothes': return '#d9bafdff';
      case 'beverage equipment': return '#F4C2C2';
      case 'inspirepages': return '#B8E6B8';
      default: return '#D3D3D3';
    }
  }
}
