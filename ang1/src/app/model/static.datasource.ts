import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { CaseSummary } from "./caseSummary.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
       
    ];
    private caseSummary: CaseSummary[] = [
        
    ];
    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    getCaseSummaries(): Observable<CaseSummary[]> {
        return from([this.caseSummary]);
    }
}
