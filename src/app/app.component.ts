import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  allProducts = [
    { nombre: "polera", talla: 13, stock: 12, tipo: "calor" },
    { nombre: "camisa", talla: 54, stock: 22, tipo: "frio" },
    { nombre: "jeans", talla: 78, stock: 0, tipo: "calor" },
    { nombre: "corto", talla: 90, stock: 44, tipo: "calor" },
    { nombre: "buso", talla: 56, stock: 0, tipo: "frio" },
    { nombre: "blusa", talla: 33, stock: 50, tipo: "frio" },
    { nombre: "chompa", talla: 10, stock: 5, tipo: "calor" },
    { nombre: "bozer", talla: 34, stock: 1, tipo: "frio" },
    { nombre: "blusa", talla: 5, stock: 2, tipo: "calor" },
    { nombre: "guantes", talla: 75, stock: 5, tipo: "calor" }
  ];

  products = {
    calor : this.allProducts.filter(p => p.tipo === 'calor'),
    frio : this.allProducts.filter(p => p.tipo === 'frio')
  }

  getTotalStock(){
    const totalCalor = this.products.calor.map(p => p.stock).reduce((a, p) => a + p);
    const totaFrio = this.products.frio.map(p => p.stock).reduce((a, p) => a + p);
    return (totalCalor + totaFrio);
  }

  comprar(product, tipo){
     const index = this.products[tipo].findIndex(p => p === product);
     this.products[tipo][index].stock = this.products[tipo][index].stock - 1; 
  }

}
