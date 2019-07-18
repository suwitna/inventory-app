import {
  Component,
  EventEmitter,
  Input,
  Output

} from '@angular/core';
import { Product } from '../product.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onProductSelected: EventEmitter<Product>;

   // property currentProduct - local state containing the currently selected "Product"
   private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product) {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
