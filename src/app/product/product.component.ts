import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() nombre: string;
  @Input() talla: number;
  @Input() stock: number;

  @Output() comprar = new EventEmitter();

  constructor() {}

  ngOnInit() {}

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
