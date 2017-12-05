export class NgbookPriceService {
  constructor(){}

  calculateTotalPrice(basePrice: number, state: string) {
    // accessing a real database of state sales tax amounts
    const tax = Math.random();

    return basePrice + tax;
  }
}