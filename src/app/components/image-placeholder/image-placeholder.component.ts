import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-image-placeholder',
  templateUrl: './image-placeholder.component.html',
  styleUrls: ['./image-placeholder.component.scss']
})
export class ImagePlaceholderComponent {
    private _height: number = 100;
    private _width: number = 100;

    @Input() set height(value: number) {
      this._height = value;
    }

    get height(): number {
      return this._height;
    }

    @Input() set width(value: number) {
      this._width = value;
    }

    get width(): number {
      return this._width;
    }
}
