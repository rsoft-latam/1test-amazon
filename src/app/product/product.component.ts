import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "product",
  template: `
  <div [style.background]="stock === 0 ? 'red' : 'orange'"
       style="float: left; margin: 10px; padding: 10px;">

	  <p>Nombre: {{nombre | uppercase}}</p>
	  <p>Talla: {{getTalla(talla)}}</p>
	  <p>Stock: {{stock}}</p>

	  <button (click)="onComprar()" [disabled]="stock === 0">
      Comprar
    </button>
  </div>
  `
})
export class ProductComponent {
  @Input() nombre: string;
  @Input() talla: number;
  @Input() stock: number;
  @Output() comprar = new EventEmitter();

  constructor() {}

  onComprar() {
    this.comprar.emit();
  }

  getTalla(talla: number) {
    if (talla > 0 && talla < 21) return "XS";
    if (talla > 20 && talla < 31) return "S";
    if (talla > 30 && talla < 51) return "M";
    if (talla > 50 && talla < 71) return "L";
    if (talla > 70 && talla < 101) return "XL";
  }
}
